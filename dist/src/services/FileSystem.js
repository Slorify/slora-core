import fs from "fs/promises";
class FileSystem {
    async createDir(path) {
        return await fs.mkdir(path, { recursive: true });
    }
    async deleteDir(path) {
        try {
            return await fs.rm(path, { recursive: true });
        }
        catch (err) {
            return null;
        }
    }
    async renameDir(path, newPath) {
        return await fs.rename(path, newPath);
    }
    async readDir(path) {
        return await fs.readdir(path);
    }
    async writeFile(path, data) {
        return await fs.writeFile(path, data);
    }
    async readFile(path) {
        return await fs.readFile(path);
    }
}
export const fileService = new FileSystem();
//# sourceMappingURL=FileSystem.js.map