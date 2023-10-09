/*
  Warnings:

  - You are about to drop the column `NameProfile` on the `Comentarios` table. All the data in the column will be lost.
  - You are about to drop the column `PostagemData` on the `Comentarios` table. All the data in the column will be lost.
  - Added the required column `nameProfile` to the `Comentarios` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Comentarios" DROP COLUMN "NameProfile",
DROP COLUMN "PostagemData",
ADD COLUMN     "nameProfile" TEXT NOT NULL,
ADD COLUMN     "postagemData" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
