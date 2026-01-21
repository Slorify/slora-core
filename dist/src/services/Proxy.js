import { NETWORKS, PATHS } from "../config/paths.js";
import { composeService } from "./Compose.js";
import { dockerService } from "./Docker.js";
import { fileService } from "./FileSystem.js";
const proxyName = "proxy";
const composeProxy = `
version: "3.9"

networks:
  ${NETWORKS.proxy}:
    external: true

services:
  ${proxyName}:
    image: traefik:v3.6
    container_name: ${proxyName} 
    restart: unless-stopped

    ports:
      - "80:80"
      - "443:443"
      - "8080:8080"

    volumes:
      - "/var/run/docker.sock:/var/run/docker.sock:ro"

    command:
      - "--providers.docker=true"
      - "--providers.docker.exposedbydefault=false"
      - "--api.insecure=true"
      - "--entrypoints.web.address=:80"
      - "--entrypoints.websecure.address=:443"

    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.dashboard.rule=Host(\`proxy.localhost\`)"
      - "traefik.http.routers.dashboard.entrypoints=web"
      - "traefik.http.routers.dashboard.service=api@internal"
      - "traefik.docker.network=${NETWORKS.proxy}"

    networks:
      - ${NETWORKS.proxy}
`;
class Proxy {
    async install() {
        await fileService.createDir(PATHS.proxy);
        await fileService.writeFile(`${PATHS.proxy}/docker-compose.yml`, composeProxy);
        await dockerService.createNetwork(NETWORKS.proxy, proxyName);
        await composeService.up(proxyName, `${PATHS.proxy}/`, proxyName);
    }
    async start() {
        await dockerService.start(proxyName, proxyName);
    }
    async stop() {
        await dockerService.stop(proxyName, proxyName);
    }
    async logs() {
        await dockerService.logs(proxyName, proxyName);
    }
}
export const proxyService = new Proxy;
//# sourceMappingURL=Proxy.js.map