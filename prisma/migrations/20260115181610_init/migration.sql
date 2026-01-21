-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Domain" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "domain" TEXT NOT NULL,
    "port" INTEGER NOT NULL DEFAULT 80,
    "instanceId" INTEGER NOT NULL,
    CONSTRAINT "Domain_instanceId_fkey" FOREIGN KEY ("instanceId") REFERENCES "Instance" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Domain" ("domain", "id", "instanceId", "name") SELECT "domain", "id", "instanceId", "name" FROM "Domain";
DROP TABLE "Domain";
ALTER TABLE "new_Domain" RENAME TO "Domain";
CREATE UNIQUE INDEX "Domain_instanceId_key" ON "Domain"("instanceId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
