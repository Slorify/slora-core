import { prisma } from "./prisma";

export type Status =
  | "deploying"
  | "starting"
  | "running"
  | "restarting"
  | "stopped";

interface State {
  status: Status;
  lastSeen: number;
}

const services = new Map<string, State>();

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
      return "stopped";
  }
}

async function saveStatusToDB(service: string, status: Status) {
  const parts = service.split("-");
  const instanceSlug = parts.at(-1);
  if (!instanceSlug) return;

  await prisma.instance.update({
    where: { slug: instanceSlug },
    data: { status },
  });
}

export async function updateStatusFromPhase(
  service: string,
  phase: string,
): Promise<void> {
  const now = Date.now();
  const nextStatus = phaseToStatus(phase);
  const prev = services.get(service);

  if (prev?.status === "running" && nextStatus === "stopped") {
    return;
  }

  if (prev?.status === nextStatus) {
    services.set(service, { ...prev, lastSeen: now });
    return;
  }

  services.set(service, {
    status: nextStatus,
    lastSeen: now,
  });

  saveStatusToDB(service, nextStatus).catch(console.error);
}

export function getStatus(service: string): Status {
  return services.get(service)?.status ?? "stopped";
}
