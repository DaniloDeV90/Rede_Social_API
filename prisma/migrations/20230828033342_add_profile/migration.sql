-- CreateTable
CREATE TABLE "Profile" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "sexo" TEXT NOT NULL,
    "imgPerfil" TEXT NOT NULL,
    "Cadastro_Id" TEXT NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Profile_Cadastro_Id_key" ON "Profile"("Cadastro_Id");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_Cadastro_Id_fkey" FOREIGN KEY ("Cadastro_Id") REFERENCES "cadastros"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
