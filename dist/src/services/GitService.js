import { runCmd } from "../utils/runCmd.js";
class GitService {
    async clone(url, path, channel) {
        await runCmd(`git clone ${url} ${path}`, channel);
    }
}
export const gitService = new GitService();
//# sourceMappingURL=GitService.js.map