declare class Railpack {
    install(channel: string): Promise<void>;
    build(path: string, channel: string): Promise<string>;
}
export declare const railpackService: Railpack;
export {};
//# sourceMappingURL=Railpack.d.ts.map