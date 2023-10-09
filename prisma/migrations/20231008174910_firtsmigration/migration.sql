/*
  Warnings:

  - You are about to drop the column `Token` on the `cadastros` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "cadastros" DROP COLUMN "Token";

-- CreateTable
CREATE TABLE "Token" (
    "id" TEXT NOT NULL,
    "Token" TEXT NOT NULL,
    "CadastroId" TEXT NOT NULL,

    CONSTRAINT "Token_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Token_CadastroId_key" ON "Token"("CadastroId");

-- AddForeignKey
ALTER TABLE "Token" ADD CONSTRAINT "Token_CadastroId_fkey" FOREIGN KEY ("CadastroId") REFERENCES "cadastros"("id") ON DELETE CASCADE ON UPDATE CASCADE;
