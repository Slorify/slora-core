/*
  Warnings:

  - Added the required column `slug` to the `Instance` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
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
    CONSTRAINT "Instance_workspaceId_fkey" FOREIGN KEY ("workspaceId") REFERENCES "Workspace" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Instance" ("createdAt", "enviorement", "gitUrl", "id", "image", "name", "portId", "type", "updatedAt", "volume", "workspaceId") SELECT "createdAt", "enviorement", "gitUrl", "id", "image", "name", "portId", "type", "updatedAt", "volume", "workspaceId" FROM "Instance";
DROP TABLE "Instance";
ALTER TABLE "new_Instance" RENAME TO "Instance";
CREATE UNIQUE INDEX "Instance_slug_key" ON "Instance"("slug");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
