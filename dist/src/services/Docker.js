import { runCmd } from "../utils/runCmd.js";
class Docker {
    async getAll(channel) {
        await runCmd(`docker ps --format json`, channel);
    }
    async create(opts, image, channel) {
        await runCmd(`docker create ${opts} ${image}`, channel);
    }
    async start(name, channel) {
        await runCmd(`docker start ${name}`, channel);
    }
    async stop(name, channel) {
        await runCmd(`docker stop ${name}`, channel);
    }
    async remove(name, channel) {
        await runCmd(`docker rm ${name}`, channel);
    }
    async createNetwork(name, channel) {
        await runCmd(`docker network create ${name}`, channel);
    }
    async logs(name, channel) {
        await runCmd(`docker logs -f ${name}`, channel);
    }
}
export const dockerService = new Docker();
//# sourceMappingURL=Docker.js.map