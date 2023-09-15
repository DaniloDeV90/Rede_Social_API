-- DropForeignKey
ALTER TABLE "ImgPerfil" DROP CONSTRAINT "ImgPerfil_Profile_id_fkey";

-- AddForeignKey
ALTER TABLE "ImgPerfil" ADD CONSTRAINT "ImgPerfil_Profile_id_fkey" FOREIGN KEY ("Profile_id") REFERENCES "Profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;
