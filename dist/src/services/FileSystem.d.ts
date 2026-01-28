declare class FileSystem {
    createDir(path: string): Promise<string | undefined>;
    deleteDir(path: string): Promise<void | null>;
    renameDir(path: string, newPath: string): Promise<void>;
    readDir(path: string): Promise<string[]>;
    writeFile(path: string, data: string): Promise<void>;
    readFile(path: string): Promise<NonSharedBuffer>;
}
export declare const fileService: FileSystem;
export {};
//# sourceMappingURL=FileSystem.d.ts.map