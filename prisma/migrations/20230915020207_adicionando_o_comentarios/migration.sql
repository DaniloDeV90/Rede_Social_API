-- AlterTable
ALTER TABLE "Comentarios" ADD COLUMN     "PostagemData" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "imgPerfilUrl" TEXT;