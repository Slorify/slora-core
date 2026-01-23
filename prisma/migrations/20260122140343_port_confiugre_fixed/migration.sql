/*
  Warnings:

  - A unique constraint covering the columns `[host]` on the table `Port` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Port_host_key" ON "Port"("host");
