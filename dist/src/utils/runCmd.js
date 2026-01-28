import run from "./run.js";
import { io } from "../server.js";
export const logStore = {};
export async function runCmd(cmd, channel, options = {}) {
    if (!logStore[channel])
        logStore[channel] = [];
    return run(cmd, (line) => {
        if (!logStore[channel])
            logStore[channel] = [];
        logStore[channel].push(line);
        if (logStore[channel] && logStore[channel].length > 500)
            logStore[channel].shift();
        io.emit(channel, line);
    }, options);
}
//# sourceMappingURL=runCmd.js.map