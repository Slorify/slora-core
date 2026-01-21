declare class Compose {
    writeFile(name: string, instances: any[]): Promise<void>;
    up(name: string | undefined, path: string, channel: string): Promise<void>;
    down(name: string | undefined, path: string, channel: string): Promise<void>;
    start(name: string, path: string, channel: string): Promise<void>;
    stop(name: string, path: string, channel: string): Promise<void>;
}
export declare const composeService: Compose;
export {};
//# sourceMappingURL=Compose.d.ts.map