/*
  Warnings:

  - You are about to drop the column `Profile_id` on the `ImgPerfil` table. All the data in the column will be lost.
  - You are about to drop the column `Cadastro_Id` on the `Profile` table. All the data in the column will be lost.
  - You are about to drop the column `CadastroId` on the `Token` table. All the data in the column will be lost.
  - You are about to drop the column `Token` on the `Token` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[profile_id]` on the table `ImgPerfil` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[cadastro_Id]` on the table `Profile` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[cadastroId]` on the table `Token` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `profile_id` to the `ImgPerfil` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cadastro_Id` to the `Profile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cadastroId` to the `Token` table without a default value. This is not possible if the table is not empty.
  - Added the required column `token` to the `Token` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ImgPerfil" DROP CONSTRAINT "ImgPerfil_Profile_id_fkey";

-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_Cadastro_Id_fkey";

-- DropForeignKey
ALTER TABLE "Token" DROP CONSTRAINT "Token_CadastroId_fkey";

-- DropIndex
DROP INDEX "ImgPerfil_Profile_id_key";

-- DropIndex
DROP INDEX "Profile_Cadastro_Id_key";

-- DropIndex
DROP INDEX "Token_CadastroId_key";

-- AlterTable
ALTER TABLE "ImgPerfil" DROP COLUMN "Profile_id",
ADD COLUMN     "profile_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "Cadastro_Id",
ADD COLUMN     "cadastro_Id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Token" DROP COLUMN "CadastroId",
DROP COLUMN "Token",
ADD COLUMN     "cadastroId" TEXT NOT NULL,
ADD COLUMN     "token" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "ImgPerfil_profile_id_key" ON "ImgPerfil"("profile_id");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_cadastro_Id_key" ON "Profile"("cadastro_Id");

-- CreateIndex
CREATE UNIQUE INDEX "Token_cadastroId_key" ON "Token"("cadastroId");

-- AddForeignKey
ALTER TABLE "Token" ADD CONSTRAINT "Token_cadastroId_fkey" FOREIGN KEY ("cadastroId") REFERENCES "cadastros"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_cadastro_Id_fkey" FOREIGN KEY ("cadastro_Id") REFERENCES "cadastros"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ImgPerfil" ADD CONSTRAINT "ImgPerfil_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "Profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;
