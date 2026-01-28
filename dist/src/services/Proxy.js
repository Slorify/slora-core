import { NETWORKS, PATHS } from "../config/paths.js";
import { composeService } from "./Compose.js";
import { dockerService } from "./Docker.js";
import { fileService } from "./FileSystem.js";
import { runCmd } from "../utils/runCmd.js";
const isSwarmMode = process.env.SWARM_MODE === "true";
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
      - "--log.level=INFO"
      - "--accesslog=true"

    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.dashboard.rule=Host(\`proxy.localhost\`)"
      - "traefik.http.routers.dashboard.entrypoints=web"
      - "traefik.http.routers.dashboard.service=api@internal"
      - "traefik.docker.network=${NETWORKS.proxy}"

    networks:
      - ${NETWORKS.proxy}
`;
const swarmProxy = `
version: "3.8"

networks:
  ${NETWORKS.proxy}:
    external: true

services:
  ${proxyName}:
    image: traefik:v3.6
    deploy:
      replicas: 1
      restart_policy:
        condition: on-failure
      labels:
        - "traefik.enable=true"
        - "traefik.http.routers.dashboard.rule=Host(\`proxy.localhost\`)"
        - "traefik.http.routers.dashboard.entrypoints=web"
        - "traefik.http.routers.dashboard.service=api@internal"
        - "traefik.docker.network=${NETWORKS.proxy}"

    ports:
      - target: 80
        published: 80
        mode: host
      - target: 443
        published: 443
        mode: host
      - target: 8080
        published: 8080
        mode: host

    volumes:
      - "/var/run/docker.sock:/var/run/docker.sock:ro"

    command:
      - "--providers.docker=true"
      - "--providers.docker.exposedbydefault=false"
      - "--providers.swarm=true"
      - "--providers.swarm.exposedbydefault=false"
      - "--api.insecure=true"
      - "--entrypoints.web.address=:80"
      - "--entrypoints.websecure.address=:443"
      - "--log.level=INFO"
      - "--accesslog=true"

    networks:
      - ${NETWORKS.proxy}
`;
class Proxy {
    async install() {
        await fileService.createDir(PATHS.proxy);
        const proxyConfig = isSwarmMode ? swarmProxy : composeProxy;
        await fileService.writeFile(`${PATHS.proxy}/docker-compose.yml`, proxyConfig);
        await dockerService.createNetwork(NETWORKS.proxy, `deploy-${proxyName}`);
        await composeService.up(proxyName, `${PATHS.proxy}/`, `deploy-${proxyName}`);
    }
    async start() {
        await dockerService.start(proxyName, `start-${proxyName}`);
    }
    async stop() {
        await dockerService.stop(proxyName, `stop-${proxyName}`);
    }
    async logs() {
        await dockerService.logs(proxyName, `logs-${proxyName}`);
    }
}
export const proxyService = new Proxy();
//# sourceMappingURL=Proxy.js.map