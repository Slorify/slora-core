-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_GitRepo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "appId" INTEGER NOT NULL,
    "repo" TEXT NOT NULL,
    "branch" TEXT,
    "instanceId" INTEGER NOT NULL,
    CONSTRAINT "GitRepo_instanceId_fkey" FOREIGN KEY ("instanceId") REFERENCES "Instance" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_GitRepo" ("appId", "branch", "id", "instanceId", "repo") SELECT "appId", "branch", "id", "instanceId", "repo" FROM "GitRepo";
DROP TABLE "GitRepo";
ALTER TABLE "new_GitRepo" RENAME TO "GitRepo";
CREATE UNIQUE INDEX "GitRepo_instanceId_key" ON "GitRepo"("instanceId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
