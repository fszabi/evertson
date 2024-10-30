/*
  Warnings:

  - You are about to drop the `Event` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Event";

-- CreateTable
CREATE TABLE "ServerEvent" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "server" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'COMING_SOON',
    "date" TIMESTAMP(3) NOT NULL,
    "first_prize" TEXT NOT NULL,
    "second_prize" TEXT NOT NULL,
    "third_prize" TEXT NOT NULL,

    CONSTRAINT "ServerEvent_pkey" PRIMARY KEY ("id")
);
