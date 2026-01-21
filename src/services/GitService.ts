import { runCmd } from "../utils/runCmd.js";

class GitService {
  async clone(url: string, path: string, channel: string) {
    await runCmd(`git clone ${url} ${path}`, channel)
  }
}

export const gitService = new GitService();
