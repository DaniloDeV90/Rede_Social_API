-- DropForeignKey
ALTER TABLE "posts" DROP CONSTRAINT "posts_ProfileId_fkey";

-- AddForeignKey
ALTER TABLE "posts" ADD CONSTRAINT "posts_ProfileId_fkey" FOREIGN KEY ("ProfileId") REFERENCES "Profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;
