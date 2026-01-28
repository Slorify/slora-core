import { runCmd } from "../utils/runCmd.js";

const isSwarmMode = process.env.SWARM_MODE === "true";

class Docker {
  async getAll(channel: string): Promise<void> {
    if (isSwarmMode) {
      await runCmd(`docker service ls --format json`, channel);
    } else {
      await runCmd(`docker ps --format json`, channel);
    }
  }

  async create(opts: string, image: string, channel: string): Promise<void> {
    if (isSwarmMode) {
      await runCmd(`docker service create ${opts} ${image}`, channel);
    } else {
      await runCmd(`docker create ${opts} ${image}`, channel);
    }
  }

  async start(name: string, channel: string): Promise<void> {
    if (isSwarmMode) {
      await runCmd(
        `docker service ls --format "{{.Name}}" | grep "_${name}$" | head -1 | xargs -I {} docker service scale {}=1`,
        channel,
      );
    } else {
      await runCmd(`docker start ${name}`, channel);
    }
  }

  async stop(name: string, channel: string): Promise<void> {
    if (isSwarmMode) {
      await runCmd(
        `docker service ls --format "{{.Name}}" | grep "_${name}$" | head -1 | xargs -I {} docker service scale {}=0`,
        channel,
      );
    } else {
      await runCmd(`docker stop ${name}`, channel);
    }
  }

  async remove(name: string, channel: string): Promise<void> {
    if (isSwarmMode) {
      await runCmd(`docker service rm ${name}`, channel);
    } else {
      await runCmd(`docker rm ${name}`, channel);
    }
  }

  async deleteImage(image: string, channel: string): Promise<void> {
    await runCmd(`docker rmi ${image}`, channel);
  }

  async createNetwork(name: string, channel: string) {
    if (isSwarmMode) {
      await runCmd(`docker network create --driver overlay ${name}`, channel);
    } else {
      await runCmd(`docker network create ${name}`, channel);
    }
  }

  async deleteNetwork(name: string, channel: string) {
    if (isSwarmMode) {
      await runCmd(`docker network rm ${name}`, channel);
    } else {
      await runCmd(`docker network rm ${name}`, channel);
    }
  }

  async logs(name: string, channel: string) {
    if (isSwarmMode) {
      await runCmd(
        `docker service ls --format "{{.Name}}" | grep "_${name}$" | head -1 | xargs -I {} docker service logs -f {}`,
        channel,
      );
    } else {
      await runCmd(
        `docker ps -a -q -f name=^${name}$ | grep -q . && docker logs -f ${name}`,
        channel,
      );
    }
  }
}

export const dockerService = new Docker();
