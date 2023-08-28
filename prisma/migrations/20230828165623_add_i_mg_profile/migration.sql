/*
  Warnings:

  - You are about to drop the column `imgPerfil` on the `Profile` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "imgPerfil";

-- CreateTable
CREATE TABLE "ImgPerfil" (
    "id" TEXT NOT NULL,
    "Profile_id" TEXT NOT NULL,

    CONSTRAINT "ImgPerfil_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ImgPerfil_Profile_id_key" ON "ImgPerfil"("Profile_id");

-- AddForeignKey
ALTER TABLE "ImgPerfil" ADD CONSTRAINT "ImgPerfil_Profile_id_fkey" FOREIGN KEY ("Profile_id") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
