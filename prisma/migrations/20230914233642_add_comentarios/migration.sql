-- CreateTable
CREATE TABLE "Comentarios" (
    "id" TEXT NOT NULL,
    "ProfileId" TEXT NOT NULL,
    "comentario" TEXT NOT NULL,
    "idPost" TEXT NOT NULL,

    CONSTRAINT "Comentarios_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Comentarios" ADD CONSTRAINT "Comentarios_idPost_fkey" FOREIGN KEY ("idPost") REFERENCES "posts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
