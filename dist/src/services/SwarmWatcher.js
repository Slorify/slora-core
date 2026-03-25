import { execCmd } from "./execCmd";
import { runCmd } from "../utils/runCmd";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
export async function waitForSwarmRunning(stackName, { timeoutMs = 20_000, pollMs = 1_000, removeOnFail = true, } = {}) {
    const deadline = Date.now() + timeoutMs;
    while (Date.now() < deadline) {
        const ps = await execCmd(`docker stack ps ${stackName} --no-trunc`);
        if (ps.includes("Rejected") ||
            ps.includes("Failed") ||
            ps.includes("No such image")) {
            if (removeOnFail) {
                await runCmd(`docker stack rm ${stackName}`);
            }
            throw new Error("Swarm deployment failed");
        }
        if (ps.includes("Running")) {
            return;
        }
        await sleep(pollMs);
    }
    throw new Error("Swarm deployment timeout");
}
//# sourceMappingURL=SwarmWatcher.js.map