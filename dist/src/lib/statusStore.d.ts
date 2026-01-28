export type Status = "deploying" | "starting" | "running" | "restarting" | "stopped";
export declare function updateStatusFromPhase(service: string, phase: string): Promise<void>;
export declare function getStatus(service: string): Status;
//# sourceMappingURL=statusStore.d.ts.map