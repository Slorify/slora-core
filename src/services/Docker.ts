import { runCmd } from "../utils/runCmd.js";

class Docker {
  async getAll(channel: string): Promise<void> {
    await runCmd(`docker ps --format json`, channel);
  }

  async create(opts: string, image: string, channel: string): Promise<void> {
    await runCmd(`docker create ${opts} ${image}`, channel);
  }

  async start(name: string, channel: string): Promise<void> {
    await runCmd(`docker start ${name}`, channel);
  }

  async stop(name: string, channel: string): Promise<void> {
    await runCmd(`docker stop ${name}`, channel);
  }

  async remove(name: string, channel: string): Promise<void> {
    await runCmd(`docker rm ${name}`, channel);
  }

  async deleteImage(image: string, channel: string): Promise<void> {
    await runCmd(`docker rmi ${image}`, channel);
  }

  async createNetwork(name: string, channel: string) {
    await runCmd(`docker network create ${name}`, channel);
  }

  async logs(name: string, channel: string) {
    await runCmd(
      `docker ps -a -q -f name=^${name}$ | grep -q . && docker logs -f ${name}`,
      channel,
    );
  }
}

export const dockerService = new Docker();
