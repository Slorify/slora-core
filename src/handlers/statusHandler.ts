import { io } from "../server.js";
import { prisma } from "../lib/prisma.js";

export type Status =
  | "deploying"
  | "starting"
  | "running"
  | "restarting"
  | "stopped";

export const lastEmittedStatus = new Map<string, Status>();

function phaseToStatus(phase: string): Status {
  switch (phase) {
    case "deploy":
      return "deploying";
    case "start":
      return "starting";
    case "logs":
      return "running";
    case "restart":
      return "restarting";
    case "stop":
      return "stopped";
    default:
      throw new Error(`Unknown phase: ${phase}`);
  }
}

function extractIslug(service: string): string {
  const islug = service.split("-").pop();
  if (!islug) throw new Error(`Invalid service: ${service}`);
  return islug;
}

async function saveStatusToDB(service: string, status: Status): Promise<void> {
  const islug = extractIslug(service);

  await prisma.instance.update({
    where: { slug: islug },
    data: { status },
  });
}

async function loadStatusFromDB(service: string): Promise<Status | null> {
  const islug = extractIslug(service);

  const instance = await prisma.instance.findUnique({
    where: { slug: islug },
    select: { status: true },
  });

  return instance?.status as Status | null;
}

export function attachStatusHandler(): void {
  const originalEmit = io.emit.bind(io);

  io.emit = ((event: string, ...args: unknown[]) => {
    const match = event.match(/^(deploy|start|logs|restart|stop)-(.+)$/);

    if (match) {
      const phase = match[1];
      const service = match[2];

      if (!phase || !service) {
        return originalEmit(event, ...args);
      }

      const nextStatus = phaseToStatus(phase);
      const prevStatus = lastEmittedStatus.get(service);

      if (!prevStatus) {
        loadStatusFromDB(service)
          .then((dbStatus) => {
            if (dbStatus && !lastEmittedStatus.has(service)) {
              lastEmittedStatus.set(service, dbStatus);
              originalEmit(`status-${service}`, {
                status: dbStatus,
                at: Date.now(),
              });
            }
          })
          .catch(() => { });
      }

      if (prevStatus !== nextStatus) {
        lastEmittedStatus.set(service, nextStatus);
        saveStatusToDB(service, nextStatus).catch(() => { });
        originalEmit(`status-${service}`, {
          status: nextStatus,
          at: Date.now(),
        });
      }
    }

    return originalEmit(event, ...args);
  }) as typeof io.emit;
}

export async function replayLastStatus(
  socket: { emit: (event: string, payload: unknown) => void },
  service: string,
): Promise<void> {
  let status = lastEmittedStatus.get(service) ?? null;

  if (!status) {
    status = await loadStatusFromDB(service);
    if (status) {
      lastEmittedStatus.set(service, status);
    }
  }

  if (!status) return;

  socket.emit(`status-${service}`, {
    status,
    at: Date.now(),
  });
}
