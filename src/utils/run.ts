import { spawn } from "child_process";

interface RunOptions {
  env?: Record<string, string>;
  cwd?: string; // optional working directory
}

export default function run(
  command: string,
  onLiveLog?: (line: string) => void,
  options: RunOptions = {},
): Promise<string> {
  return new Promise((resolve, reject) => {
    const [cmd, ...args] = command.split(" ");
    if (!cmd) return reject(new Error("Invalid command"));

    let logs = "";

    const child = spawn(cmd, args, {
      shell: true,
      cwd: options.cwd || process.cwd(),
      env: {
        ...process.env, // inherit current env
        ...options.env, // merge custom env vars
      },
    });

    // LIVE STDOUT
    if (child.stdout) {
      child.stdout.on("data", (data: Buffer) => {
        const text = data.toString();
        logs += text;
        if (onLiveLog) onLiveLog(text);
      });
    }

    // LIVE STDERR
    if (child.stderr) {
      child.stderr.on("data", (data: Buffer) => {
        const text = data.toString();
        logs += text;
        if (onLiveLog) onLiveLog(text);
      });
    }

    child.on("close", () => resolve(logs));

    child.on("error", reject);
  });
}