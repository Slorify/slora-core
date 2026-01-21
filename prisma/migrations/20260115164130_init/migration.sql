/*
  Warnings:

  - A unique constraint covering the columns `[instanceId]` on the table `Domain` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `instanceId` to the `Port` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Instance" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "volume" TEXT,
    "portId" INTEGER,
    "enviorement" JSONB,
    "workspaceId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Instance_workspaceId_fkey" FOREIGN KEY ("workspaceId") REFERENCES "Workspace" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Instance" ("createdAt", "enviorement", "id", "image", "name", "portId", "updatedAt", "volume", "workspaceId") SELECT "createdAt", "enviorement", "id", "image", "name", "portId", "updatedAt", "volume", "workspaceId" FROM "Instance";
DROP TABLE "Instance";
ALTER TABLE "new_Instance" RENAME TO "Instance";
CREATE TABLE "new_Port" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "host" INTEGER NOT NULL,
    "internal" INTEGER NOT NULL,
    "instanceId" INTEGER NOT NULL,
    CONSTRAINT "Port_instanceId_fkey" FOREIGN KEY ("instanceId") REFERENCES "Instance" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Port" ("host", "id", "internal") SELECT "host", "id", "internal" FROM "Port";
DROP TABLE "Port";
ALTER TABLE "new_Port" RENAME TO "Port";
CREATE UNIQUE INDEX "Port_instanceId_key" ON "Port"("instanceId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "Domain_instanceId_key" ON "Domain"("instanceId");
