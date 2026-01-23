/*
  Warnings:

  - You are about to drop the column `client_id` on the `GithubApp` table. All the data in the column will be lost.
  - You are about to drop the column `client_secret` on the `GithubApp` table. All the data in the column will be lost.
  - You are about to drop the column `url` on the `GithubApp` table. All the data in the column will be lost.
  - You are about to drop the column `webhook_secret` on the `GithubApp` table. All the data in the column will be lost.
  - Added the required column `cloneToken` to the `GithubApp` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_GithubApp" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "app_id" INTEGER NOT NULL,
    "private_key" TEXT NOT NULL,
    "owner_login" JSONB NOT NULL,
    "cloneToken" TEXT NOT NULL,
    "isInstalled" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "GithubApp_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_GithubApp" ("app_id", "createdAt", "id", "isInstalled", "name", "owner_login", "private_key", "slug", "userId") SELECT "app_id", "createdAt", "id", "isInstalled", "name", "owner_login", "private_key", "slug", "userId" FROM "GithubApp";
DROP TABLE "GithubApp";
ALTER TABLE "new_GithubApp" RENAME TO "GithubApp";
CREATE UNIQUE INDEX "GithubApp_app_id_key" ON "GithubApp"("app_id");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
