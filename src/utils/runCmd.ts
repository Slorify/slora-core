import run from "./run.js";
import { io } from "../server.js";

interface CmdOptions {
  env?: Record<string, string>;
  cwd?: string;
}

export const logStore: Record<string, string[]> = {};

export async function runCmd(
  cmd: string,
  channel: string,
  options: CmdOptions = {},
) {
  if (!logStore[channel]) logStore[channel] = [];

  return run(
    cmd,
    (line: string) => {
      if (!logStore[channel]) logStore[channel] = [];

      logStore[channel].push(line);

      if (logStore[channel] && logStore[channel].length > 500)
        logStore[channel].shift();

      io.emit(channel, line);
    },
    options,
  );
}
