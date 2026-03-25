export type Status = "deploying" | "starting" | "running" | "restarting" | "stopped";
export declare const lastEmittedStatus: Map<string, Status>;
export declare function attachStatusHandler(): void;
export declare function replayLastStatus(socket: {
    emit: (event: string, payload: unknown) => void;
}, service: string): Promise<void>;
//# sourceMappingURL=statusHandler.d.ts.map