-- CreateEnum
CREATE TYPE "Status" AS ENUM ('COMING_SOON', 'ONGOING', 'ENDED');

-- CreateTable
CREATE TABLE "Event" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "server" TEXT NOT NULL,
    "prize" TEXT NOT NULL,
    "status" "Status" NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);
