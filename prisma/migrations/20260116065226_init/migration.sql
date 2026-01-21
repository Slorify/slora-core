-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Port" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "host" INTEGER,
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
