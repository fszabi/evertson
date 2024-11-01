-- AlterTable
ALTER TABLE "Event" ALTER COLUMN "second_prize" DROP NOT NULL,
ALTER COLUMN "third_prize" DROP NOT NULL;

-- AlterTable
ALTER TABLE "ServerEvent" ALTER COLUMN "second_prize" DROP NOT NULL,
ALTER COLUMN "third_prize" DROP NOT NULL;
