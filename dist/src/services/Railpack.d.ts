declare class Railpack {
    install(channel: string): Promise<void>;
    build(path: string, channel: string): Promise<void>;
}
export declare const railpackService: Railpack;
export {};
//# sourceMappingURL=Railpack.d.ts.map