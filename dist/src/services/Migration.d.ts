declare class Migration {
    migrateToSwarm(): Promise<void>;
    migrateToCompose(): Promise<void>;
    private getRunningContainers;
    private getRunningServices;
    private stopComposeServices;
    private initSwarm;
    private leaveSwarm;
    private recreateNetworkForSwarm;
    private recreateNetworkForCompose;
    private removeAllStacks;
    private deployAsStacks;
    private startWithCompose;
    autoMigrate(): Promise<void>;
    private checkSwarmStatus;
}
export declare const migrationService: Migration;
export {};
//# sourceMappingURL=Migration.d.ts.map