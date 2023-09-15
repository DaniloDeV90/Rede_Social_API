-- DropForeignKey
ALTER TABLE "Comentarios" DROP CONSTRAINT "Comentarios_idPost_fkey";

-- AddForeignKey
ALTER TABLE "Comentarios" ADD CONSTRAINT "Comentarios_idPost_fkey" FOREIGN KEY ("idPost") REFERENCES "posts"("id") ON DELETE CASCADE ON UPDATE CASCADE;
