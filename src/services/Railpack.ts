import { runCmd } from "../utils/runCmd.js";

class Railpack {
  async install(channel: string) {
    await runCmd(
      `command -v railpack >/dev/null 2>&1 || curl -sSL https://railpack.com/install.sh | sh`,
      channel,
    );

    await runCmd(
      `docker ps --format '{{.Names}}' | grep -q '^buildkit$' || \
       docker run -d --privileged --name buildkit moby/buildkit`,
      channel,
    );
  }

  async build(path: string, channel: string) {
    await this.install(channel);

    return runCmd(`railpack build ${path}`, channel, {
      env: {
        BUILDKIT_HOST: "docker-container://buildkit",
      },
    });
  }
}

export const railpackService = new Railpack();
