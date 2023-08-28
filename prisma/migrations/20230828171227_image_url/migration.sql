/*
  Warnings:

  - Added the required column `imgUrl` to the `ImgPerfil` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ImgPerfil" ADD COLUMN     "imgUrl" TEXT NOT NULL;
