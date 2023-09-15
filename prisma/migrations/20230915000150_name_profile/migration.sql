/*
  Warnings:

  - Added the required column `NameProfile` to the `Comentarios` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Comentarios" ADD COLUMN     "NameProfile" TEXT NOT NULL;
