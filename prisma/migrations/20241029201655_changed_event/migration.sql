/*
  Warnings:

  - You are about to drop the column `prize` on the `Event` table. All the data in the column will be lost.
  - Added the required column `prize_first` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `prize_second` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `prize_third` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Event" DROP COLUMN "prize",
ADD COLUMN     "prize_first" TEXT NOT NULL,
ADD COLUMN     "prize_second" TEXT NOT NULL,
ADD COLUMN     "prize_third" TEXT NOT NULL;
