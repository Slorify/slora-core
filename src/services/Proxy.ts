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

class Proxy {
  async install() {
    await fileService.createDir(PATHS.proxy);
    await fileService.writeFile(
      `${PATHS.proxy}/docker-compose.yml`,
      composeProxy,
    );
    await dockerService.createNetwork(NETWORKS.proxy, `deploy-${proxyName}`);
    await composeService.up(
      proxyName,
      `${PATHS.proxy}/`,
      `deploy-${proxyName}`,
    );
  }

  async start() {
    await composeService.up(
      proxyName,
      `${PATHS.proxy}/`,
      `deploy-${proxyName}`,
    );
    await dockerService.start(proxyName, `start-${proxyName}`);
  }

  async stop() {
    await dockerService.stop(proxyName, `stop-${proxyName}`);
    await dockerService.remove(proxyName, `stop-${proxyName}`);
  }

  async logs() {
    await dockerService.logs(proxyName, `logs-${proxyName}`);
  }
}

export const proxyService = new Proxy();
