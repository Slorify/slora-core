import fs from "fs/promises";
import { NETWORKS, PATHS } from "../config/paths.js";
import { runCmd } from "../utils/runCmd.js";
import { fileService } from "./FileSystem.js";

const isSwarmMode = process.env.SWARM_MODE === "true";
function generateTraefikLabels(
  instanceName: string,
  domains: { domain: string }[],
  port: number,
  network = "emberlabs-proxy",
): string[] {
  const labels: string[] = [
    "traefik.enable=true",
    `traefik.docker.network=${network}`,
  ];

  domains.forEach((d, index) => {
    const routerId = `${instanceName}-${index}`;

    labels.push(
      // HTTP
      `traefik.http.routers.${routerId}-http.rule=Host(\`${d.domain}\`)`,
      `traefik.http.routers.${routerId}-http.entrypoints=web`,
      `traefik.http.routers.${routerId}-http.service=${routerId}-service`,

      // HTTPS
      `traefik.http.routers.${routerId}-https.rule=Host(\`${d.domain}\`)`,
      `traefik.http.routers.${routerId}-https.entrypoints=websecure`,
      `traefik.http.routers.${routerId}-https.tls=true`,
      `traefik.http.routers.${routerId}-https.tls.certresolver=myresolver`,
      `traefik.http.routers.${routerId}-https.service=${routerId}-service`,

      // Service port
      `traefik.http.services.${routerId}-service.loadbalancer.server.port=${port}`,
    );
  });

  return labels;
}

class Compose {
  async writeFile(name: string, instances: any[]): Promise<void> {
    const composeDir = `${PATHS.workspaces}/${name}`;
    await fileService.createDir(composeDir);

    const services = instances.map((instance) => {
      /* ---------- ENV ---------- */
      const environments =
        instance.enviorement && typeof instance.enviorement === "object"
          ? Object.entries(instance.enviorement)
            .map(([key, value]) => `        - ${key}=${String(value)}`)
            .join("\n")
          : "";

      /* ---------- VOLUMES ---------- */
      const volumes = instance.volume ? `      - ${instance.volume}` : "";

      /* ---------- PORTS (MULTIPLE) ---------- */
      const ports =
        Array.isArray(instance.ports) && instance.ports.length > 0
          ? instance.ports
            .map(
              (p: any) =>
                `      - "${p.host ? `${p.host}:` : ""}${p.internal}"`,
            )
            .join("\n")
          : "";

      /* ---------- TRAEFIK LABELS ---------- */
      const labels =
        Array.isArray(instance.domains) &&
          instance.domains.length > 0 &&
          Array.isArray(instance.ports) &&
          instance.ports.length > 0
          ? generateTraefikLabels(
            instance.slug,
            instance.domains,
            instance.ports[0].internal, // Traefik uses container port
          )
            .map((l) => `      - "${l}"`)
            .join("\n")
          : "";

      return `
    ${instance.slug}:
      image: ${instance.image}
      container_name: ${instance.slug}
      restart: unless-stopped
${environments ? `      environment:\n${environments}` : ""}
${volumes ? `      volumes:\n${volumes}` : ""}
${ports ? `      ports:\n${ports}` : ""}
${labels ? `      labels:\n${labels}` : ""}
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
    if (isSwarmMode) {
      const stackName = path.split("/").pop() || "app";
      await runCmd(
        `docker stack deploy -d -c ${path}/docker-compose.yml ${stackName}`,
        channel,
      );
    } else {
      if (!name) {
        await runCmd(
          `docker compose -f ${path}/docker-compose.yml up`,
          channel,
        );
      } else {
        await runCmd(
          `docker compose -f ${path}/docker-compose.yml up -d ${name}`,
          channel,
        );
      }
    }
  }

  async down(
    name: string | undefined,
    path: string,
    channel: string,
  ): Promise<void> {
    if (isSwarmMode) {
      const stackName = path.split("/").pop() || "app";
      await runCmd(`docker stack rm ${stackName}`, channel);
    } else {
      if (!name) {
        await runCmd(
          `docker compose -f ${path}/docker-compose.yml down`,
          channel,
        );
      } else {
        await runCmd(
          `docker compose -f ${path}/docker-compose.yml down ${name}`,
          channel,
        );
      }
    }
  }

  async start(name: string, path: string, channel: string): Promise<void> {
    if (isSwarmMode) {
      const stackName = path.split("/").pop() || "app";
      await runCmd(`docker service scale ${stackName}_${name}=1`, channel);
    } else {
      await runCmd(
        `docker compose -f ${path}/docker-compose.yml start ${name}`,
        channel,
      );
    }
  }

  async stop(name: string, path: string, channel: string): Promise<void> {
    if (isSwarmMode) {
      const stackName = path.split("/").pop() || "app";
      await runCmd(`docker service scale ${stackName}_${name}=0`, channel);
    } else {
      await runCmd(
        `docker compose -f ${path}/docker-compose.yml stop ${name}`,
        channel,
      );
    }
  }
}

export const composeService = new Compose();
