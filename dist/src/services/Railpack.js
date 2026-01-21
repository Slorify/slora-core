import { runCmd } from "../utils/runCmd.js";
class Railpack {
    async install(channel) {
        runCmd(`curl -sSL https://railpack.com/install.sh | sh`, channel);
        runCmd(`docker run --rm --privileged -d --name buildkit moby/buildkit`, channel);
    }
    async build(path, channel) {
        runCmd(`railpack build ${path}`, channel, {
            env: {
                BUILDKIT_HOST: "docker-container://buildkit",
            },
        });
    }
}
export const railpackService = new Railpack();
//# sourceMappingURL=Railpack.js.map