import run from "./run.js";
import { io } from "../server.js";
// GLOBAL LOG STORE (never reset unless server restarts)
export const logStore = {};
export async function runCmd(cmd, channel, options = {}) {
    // Initialize channel store
    if (!logStore[channel])
        logStore[channel] = [];
    return run(cmd, (line) => {
        // Initialize if not exists
        if (!logStore[channel])
            logStore[channel] = [];
        // Save logs
        logStore[channel].push(line);
        // Limit to last 500 logs (optional)
        if (logStore[channel] && logStore[channel].length > 500)
            logStore[channel].shift();
        // Emit to all connected clients
        io.emit(channel, line);
    }, options);
}
//# sourceMappingURL=runCmd.js.map