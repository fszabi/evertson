/*
  Warnings:

  - The `status` column on the `Event` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `status` column on the `ServerEvent` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "ServerEventStatus" AS ENUM ('COMING_SOON', 'ONGOING', 'ENDED');

-- CreateEnum
CREATE TYPE "EventStatus" AS ENUM ('COMING_SOON', 'ENDED');

-- AlterTable
ALTER TABLE "Event" DROP COLUMN "status",
ADD COLUMN     "status" "EventStatus" NOT NULL DEFAULT 'COMING_SOON';

-- AlterTable
ALTER TABLE "ServerEvent" DROP COLUMN "status",
ADD COLUMN     "status" "ServerEventStatus" NOT NULL DEFAULT 'COMING_SOON';

-- DropEnum
DROP TYPE "Status";
