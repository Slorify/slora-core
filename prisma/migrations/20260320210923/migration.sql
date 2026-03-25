-- CreateEnum
CREATE TYPE "ProxyType" AS ENUM ('Domain', 'Port');

-- AlterTable
ALTER TABLE "Workspace" ADD COLUMN     "maxInstances" INTEGER NOT NULL DEFAULT 1;
