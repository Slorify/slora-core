interface RunOptions {
    env?: Record<string, string>;
    cwd?: string;
}
export default function run(command: string, onLiveLog?: (line: string) => void, options?: RunOptions): Promise<string>;
export {};
//# sourceMappingURL=run.d.ts.map