-- CreateTable
CREATE TABLE "GitRepo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "appId" INTEGER NOT NULL,
    "repo" TEXT NOT NULL,
    "branch" TEXT,
    "instanceId" INTEGER NOT NULL,
    CONSTRAINT "GitRepo_instanceId_fkey" FOREIGN KEY ("instanceId") REFERENCES "Instance" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "GitRepo_instanceId_key" ON "GitRepo"("instanceId");
