/*
  Warnings:

  - You are about to drop the column `webhooK_secret` on the `GithubApp` table. All the data in the column will be lost.
  - Added the required column `webhook_secret` to the `GithubApp` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_GithubApp" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "app_id" INTEGER NOT NULL,
    "private_key" TEXT NOT NULL,
    "owner_login" JSONB NOT NULL,
    "client_id" TEXT NOT NULL,
    "client_secret" TEXT NOT NULL,
    "webhook_secret" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "GithubApp_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_GithubApp" ("app_id", "client_id", "client_secret", "id", "name", "owner_login", "private_key", "slug", "url", "userId") SELECT "app_id", "client_id", "client_secret", "id", "name", "owner_login", "private_key", "slug", "url", "userId" FROM "GithubApp";
DROP TABLE "GithubApp";
ALTER TABLE "new_GithubApp" RENAME TO "GithubApp";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
