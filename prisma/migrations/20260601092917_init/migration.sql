/*
  Warnings:

  - You are about to drop the column `url` on the `clipboard` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[code]` on the table `clipboard` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `code` to the `clipboard` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "clipboard_url_key";

-- AlterTable
ALTER TABLE "clipboard" DROP COLUMN "url",
ADD COLUMN     "code" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "clipboard_code_key" ON "clipboard"("code");
