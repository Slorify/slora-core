/*
  Warnings:

  - A unique constraint covering the columns `[app_id]` on the table `GithubApp` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "GithubApp_app_id_key" ON "GithubApp"("app_id");
