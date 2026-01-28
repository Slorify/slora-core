declare class Docker {
    getAll(channel: string): Promise<void>;
    create(opts: string, image: string, channel: string): Promise<void>;
    start(name: string, channel: string): Promise<void>;
    stop(name: string, channel: string): Promise<void>;
    remove(name: string, channel: string): Promise<void>;
    deleteImage(image: string, channel: string): Promise<void>;
    createNetwork(name: string, channel: string): Promise<void>;
    logs(name: string, channel: string): Promise<void>;
}
export declare const dockerService: Docker;
export {};
//# sourceMappingURL=Docker.d.ts.map