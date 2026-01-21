import path from "path";

export const APP_DATA_ROOT =
  process.env.APP_DATA_ROOT || path.resolve(process.cwd(), "data");

export const PATHS = {
  root: APP_DATA_ROOT,
  uploads: path.join(APP_DATA_ROOT, "uploads"),
  proxy: path.join(APP_DATA_ROOT, "proxy"),
  workspaces: path.join(APP_DATA_ROOT, "workspaces"),
  logs: path.join(APP_DATA_ROOT, "logs"),
  cache: path.join(APP_DATA_ROOT, "cache"),
};

export const NETWORKS = {
  proxy: "emberlabs-proxy"
}
