/*
  Warnings:

  - A unique constraint covering the columns `[appId]` on the table `GitRepo` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[repo]` on the table `GitRepo` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "GitRepo_appId_key" ON "GitRepo"("appId");

-- CreateIndex
CREATE UNIQUE INDEX "GitRepo_repo_key" ON "GitRepo"("repo");
