import fs from "fs/promises";
import path from "path";
import { PATHS } from "../config/paths.js";

enum ProxyType {
  DOMAIN = "DOMAIN",
  PORT = "PORT",
}

interface Config {
  proxyMode: ProxyType;
  port?: number;
  domain?: string;
  swarmMode: boolean;
}

export async function setConfig({
  proxyMode,
  port,
  domain,
  swarmMode,
}: Config) {
  const data = {
    proxyMode,
    port,
    domain,
    swarmMode,
  };

  try {
    const jsonString = JSON.stringify(data, null, 2);

    const filePath = PATHS.root + "/config.json";
    await fs.writeFile(filePath, jsonString, "utf-8");

    console.log("Config saved successfully to:", filePath);
  } catch (error) {
    console.error("Failed to save config:", error);
  }
}

export async function readConfig() {
  try {
    const filePath = PATHS.root + "/config.json";
    const jsonString = await fs.readFile(filePath, "utf-8");
    const config = JSON.parse(jsonString);
    return config;
  } catch (err: any) {
    if (err.code === "ENOENT") {
      return null;
    }
    console.error("Failed to read config:", err);
    return null;
  }
}
