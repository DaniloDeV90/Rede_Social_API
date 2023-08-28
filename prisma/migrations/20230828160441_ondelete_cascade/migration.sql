-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_Cadastro_Id_fkey";

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_Cadastro_Id_fkey" FOREIGN KEY ("Cadastro_Id") REFERENCES "cadastros"("id") ON DELETE CASCADE ON UPDATE CASCADE;
