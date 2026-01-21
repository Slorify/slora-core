-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Instance" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "volume" TEXT,
    "portId" INTEGER,
    "domainId" INTEGER,
    "enviorement" JSONB,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Instance_portId_fkey" FOREIGN KEY ("portId") REFERENCES "Port" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Instance_domainId_fkey" FOREIGN KEY ("domainId") REFERENCES "Domain" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Instance" ("createdAt", "domainId", "enviorement", "id", "image", "name", "portId", "updatedAt", "volume") SELECT "createdAt", "domainId", "enviorement", "id", "image", "name", "portId", "updatedAt", "volume" FROM "Instance";
DROP TABLE "Instance";
ALTER TABLE "new_Instance" RENAME TO "Instance";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
