import fs from "fs/promises";
import { NETWORKS, PATHS } from "../config/paths.js";
import { runCmd } from "../utils/runCmd.js";
import { fileService } from "./FileSystem.js";

function generateTraefikLabels(
  instanceName: string,
  domain: string,
  port: number,
  network = "emberlabs-proxy",
): string[] {
  return [
    "traefik.enable=true",
    `traefik.docker.network=${network}`,

    // HTTP
    `traefik.http.routers.${instanceName}-http.rule=Host(\`${domain}\`)`,
    `traefik.http.routers.${instanceName}-http.entrypoints=web`,
    `traefik.http.routers.${instanceName}-http.service=${instanceName}-service`,

    // HTTPS
    `traefik.http.routers.${instanceName}-https.rule=Host(\`${domain}\`)`,
    `traefik.http.routers.${instanceName}-https.entrypoints=websecure`,
    `traefik.http.routers.${instanceName}-https.tls=true`,
    `traefik.http.routers.${instanceName}-https.tls.certresolver=myresolver`,
    `traefik.http.routers.${instanceName}-https.service=${instanceName}-service`,

    // Service port
    `traefik.http.services.${instanceName}-service.loadbalancer.server.port=${port}`,
  ];
}

class Compose {
  async writeFile(name: string, instances: any[]): Promise<void> {
    const composeDir = `${PATHS.workspaces}/${name}`;
    await fileService.createDir(composeDir);

    const services = instances.map((instance) => {
      /* ---------- ENV (ARRAY STYLE) ---------- */
      const environments =
        instance.enviorement && typeof instance.enviorement === "object"
          ? Object.entries(instance.enviorement)
            .map(([key, value]) => `        - ${key}=${String(value)}`)
            .join("\n")
          : "";

      /* ---------- VOLUME ---------- */
      const volumes = instance.volume ? `      - ${instance.volume}` : "";

      /* ---------- PORT ---------- */
      const ports = instance.ports
        ? `      - "${instance.ports.host ? instance.ports.host + ":" : ""}${instance.ports.internal}"`
        : "";

      /* ---------- TRAEFIK LABELS ---------- */
      const labels =
        instance.domains && instance.ports
          ? generateTraefikLabels(
            instance.slug,
            instance.domains.domain,
            instance.domains.port,
          )
            .map((l: string) => `      - "${l}"`)
            .join("\n")
          : "";

      return `
    ${instance.slug}:
      image: ${instance.image}
      container_name: ${instance.slug}
      restart: unless-stopped
  ${environments ? `    environment:\n${environments}` : ""}
  ${volumes ? `    volumes:\n${volumes}` : ""}
  ${ports ? `    ports:\n${ports}` : ""}
  ${labels ? `    labels:\n${labels}` : ""}
      networks:
        - ${NETWORKS.proxy}
`;
    });

    const composeYml = `
networks:
  ${NETWORKS.proxy}:
    external: true
services:
${services.join("")}
`;

    await fs.writeFile(
      `${composeDir}/docker-compose.yml`,
      composeYml.trim(),
      "utf8",
    );
  }

  async up(
    name: string | undefined,
    path: string,
    channel: string,
  ): Promise<void> {
    if (!name) {
      await runCmd(`docker compose -f ${path}/docker-compose.yml up`, channel);
    }
    await runCmd(
      `docker compose -f ${path}/docker-compose.yml up -d ${name}`,
      channel,
    );
  }

  async down(
    name: string | undefined,
    path: string,
    channel: string,
  ): Promise<void> {
    if (!name) {
      await runCmd(
        `docker compose -f ${path}/docker-compose.yml down`,
        channel,
      );
    }
    await runCmd(
      `docker compose -f ${path}/docker-compose.yml down -d ${name}`,
      channel,
    );
  }

  async start(name: string, path: string, channel: string): Promise<void> {
    await runCmd(
      `docker compose -f ${path}/docker-compose.yml start ${name}`,
      channel,
    );
  }

  async stop(name: string, path: string, channel: string) {
    await runCmd(
      `docker compose -f ${path}/docker-compose.yml stop ${name}`,
      channel,
    );
  }
}

export const composeService = new Compose();
