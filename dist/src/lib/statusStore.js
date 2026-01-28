import { prisma } from "./prisma";
const services = new Map();
function phaseToStatus(phase) {
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
async function saveStatusToDB(service, status) {
    const parts = service.split("-");
    const instanceSlug = parts.at(-1);
    if (!instanceSlug)
        return;
    await prisma.instance.update({
        where: { slug: instanceSlug },
        data: { status },
    });
}
export async function updateStatusFromPhase(service, phase) {
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
export function getStatus(service) {
    return services.get(service)?.status ?? "stopped";
}
//# sourceMappingURL=statusStore.js.map