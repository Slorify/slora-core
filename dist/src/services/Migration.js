import { runCmd } from "../utils/runCmd.js";
import { NETWORKS } from "../config/paths.js";
class Migration {
    async migrateToSwarm() {
        console.log("Migrating from Compose to Swarm mode...");
        // Get all running containers
        const containers = await this.getRunningContainers();
        // Stop all compose services
        await this.stopComposeServices();
        // Initialize swarm if not already
        await this.initSwarm();
        // Recreate network as overlay
        await this.recreateNetworkForSwarm();
        // Deploy services as stacks
        await this.deployAsStacks(containers);
        console.log("Migration to Swarm completed!");
    }
    async migrateToCompose() {
        console.log("Migrating from Swarm to Compose mode...");
        // Get all running services
        const services = await this.getRunningServices();
        // Remove all stacks
        await this.removeAllStacks();
        // Leave swarm mode
        await this.leaveSwarm();
        // Recreate network as bridge
        await this.recreateNetworkForCompose();
        // Start services with compose
        await this.startWithCompose(services);
        console.log("Migration to Compose completed!");
    }
    async getRunningContainers() {
        try {
            const result = await runCmd(`docker ps --format "{{.Names}}" | grep -v "^$"`, "migration");
            return result.split('\n').filter(name => name.trim());
        }
        catch {
            return [];
        }
    }
    async getRunningServices() {
        try {
            const result = await runCmd(`docker service ls --format "{{.Name}}" | grep -v "^$"`, "migration");
            return result.split('\n').filter(name => name.trim());
        }
        catch {
            return [];
        }
    }
    async stopComposeServices() {
        await runCmd(`docker ps -q | xargs -r docker stop`, "migration");
    }
    async initSwarm() {
        try {
            await runCmd(`docker swarm init`, "migration");
        }
        catch {
            // Already in swarm mode
        }
    }
    async leaveSwarm() {
        try {
            await runCmd(`docker swarm leave --force`, "migration");
        }
        catch {
            // Not in swarm mode
        }
    }
    async recreateNetworkForSwarm() {
        try {
            await runCmd(`docker network rm ${NETWORKS.proxy}`, "migration");
        }
        catch { }
        await runCmd(`docker network create --driver overlay --attachable ${NETWORKS.proxy}`, "migration");
    }
    async recreateNetworkForCompose() {
        try {
            await runCmd(`docker network rm ${NETWORKS.proxy}`, "migration");
        }
        catch { }
        await runCmd(`docker network create ${NETWORKS.proxy}`, "migration");
    }
    async removeAllStacks() {
        try {
            const stacks = await runCmd(`docker stack ls --format "{{.Name}}"`, "migration");
            const stackNames = stacks.split('\n').filter(name => name.trim());
            for (const stack of stackNames) {
                await runCmd(`docker stack rm ${stack}`, "migration");
            }
            // Wait for stacks to be removed
            await new Promise(resolve => setTimeout(resolve, 5000));
        }
        catch { }
    }
    async deployAsStacks(containers) {
        // This would need to read existing compose files and deploy them as stacks
        // For now, just redeploy known services
        const knownServices = ['proxy'];
        for (const service of knownServices) {
            if (containers.includes(service)) {
                try {
                    await runCmd(`docker stack deploy -c /opt/slorify/${service}/docker-compose.yml ${service}`, "migration");
                }
                catch { }
            }
        }
    }
    async startWithCompose(services) {
        // Extract service names from stack_service format
        const serviceNames = services.map(s => s.includes('_') ? s.split('_')[1] : s);
        const uniqueServices = [...new Set(serviceNames)];
        for (const service of uniqueServices) {
            try {
                await runCmd(`docker compose -f /opt/slorify/${service}/docker-compose.yml up -d`, "migration");
            }
            catch { }
        }
    }
    async autoMigrate() {
        const isSwarmMode = process.env.SWARM_MODE === "true";
        const isInSwarm = await this.checkSwarmStatus();
        if (isSwarmMode && !isInSwarm) {
            await this.migrateToSwarm();
        }
        else if (!isSwarmMode && isInSwarm) {
            await this.migrateToCompose();
        }
    }
    async checkSwarmStatus() {
        try {
            await runCmd(`docker node ls`, "migration");
            return true;
        }
        catch {
            return false;
        }
    }
}
export const migrationService = new Migration();
//# sourceMappingURL=Migration.js.map