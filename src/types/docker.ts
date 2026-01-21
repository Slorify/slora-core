// types/docker.ts
export type Port = {
  host: number;
  container: number;
};

export type Volume = {
  host: string;
  container: string;
};

export type Instance = {
  name: string;                 // service name (api, redis, db, etc.)
  image: string;
  command?: string;
  workingDir?: string;
  ports?: Port[];
  volumes?: Volume[];
  env?: Record<string, string>;
  dependsOn?: string[];
};

export type ComposeData = {
  version?: string;
  instances: Instance[];
};
