-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Domain" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "domain" TEXT NOT NULL,
    "port" INTEGER NOT NULL DEFAULT 80,
    "instanceId" INTEGER NOT NULL,
    CONSTRAINT "Domain_instanceId_fkey" FOREIGN KEY ("instanceId") REFERENCES "Instance" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Domain" ("domain", "id", "instanceId", "name", "port") SELECT "domain", "id", "instanceId", "name", "port" FROM "Domain";
DROP TABLE "Domain";
ALTER TABLE "new_Domain" RENAME TO "Domain";
CREATE UNIQUE INDEX "Domain_instanceId_key" ON "Domain"("instanceId");
CREATE TABLE "new_Instance" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "type" TEXT NOT NULL DEFAULT 'Railpacks',
    "gitUrl" TEXT,
    "volume" TEXT,
    "portId" INTEGER,
    "enviorement" JSONB,
    "workspaceId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Instance_workspaceId_fkey" FOREIGN KEY ("workspaceId") REFERENCES "Workspace" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Instance" ("createdAt", "enviorement", "gitUrl", "id", "image", "name", "portId", "slug", "type", "updatedAt", "volume", "workspaceId") SELECT "createdAt", "enviorement", "gitUrl", "id", "image", "name", "portId", "slug", "type", "updatedAt", "volume", "workspaceId" FROM "Instance";
DROP TABLE "Instance";
ALTER TABLE "new_Instance" RENAME TO "Instance";
CREATE UNIQUE INDEX "Instance_slug_key" ON "Instance"("slug");
CREATE TABLE "new_Port" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "host" INTEGER NOT NULL,
    "internal" INTEGER NOT NULL,
    "instanceId" INTEGER NOT NULL,
    CONSTRAINT "Port_instanceId_fkey" FOREIGN KEY ("instanceId") REFERENCES "Instance" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Port" ("host", "id", "instanceId", "internal") SELECT "host", "id", "instanceId", "internal" FROM "Port";
DROP TABLE "Port";
ALTER TABLE "new_Port" RENAME TO "Port";
CREATE UNIQUE INDEX "Port_instanceId_key" ON "Port"("instanceId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
