export declare const getAllGitApps: (email: string) => Promise<{
    id: number;
    createdAt: Date;
    app_id: number;
    private_key: string;
    isInstalled: boolean;
}[]>;
export declare const getGitApp: (email: string, app_id: number) => Promise<{
    id: number;
    createdAt: Date;
    app_id: number;
    private_key: string;
    isInstalled: boolean;
} | null>;
//# sourceMappingURL=gitAppHandler.d.ts.map