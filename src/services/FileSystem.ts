import fs from "fs/promises";

class FileSystem {
  async createDir(path: string) {
    return await fs.mkdir(path, { recursive: true });
  }
  async deleteDir(path: string) {
    try {
      return await fs.rm(path, { recursive: true });
    } catch (err) {
      return null;
    }
  }

  async renameDir(path: string, newPath: string) {
    return await fs.rename(path, newPath);
  }

  async readDir(path: string) {
    return await fs.readdir(path);
  }

  async writeFile(path: string, data: string) {
    return await fs.writeFile(path, data);
  }

  async readFile(path: string) {
    return await fs.readFile(path);
  }
}

export const fileService = new FileSystem();
