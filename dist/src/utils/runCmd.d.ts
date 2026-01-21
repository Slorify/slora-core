interface CmdOptions {
    env?: Record<string, string>;
    cwd?: string;
}
export declare const logStore: Record<string, string[]>;
export declare function runCmd(cmd: string, channel: string, options?: CmdOptions): Promise<string>;
export {};
//# sourceMappingURL=runCmd.d.ts.map