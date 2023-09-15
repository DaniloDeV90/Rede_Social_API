-- DropForeignKey
ALTER TABLE "imgposts" DROP CONSTRAINT "imgposts_postId_fkey";

-- AddForeignKey
ALTER TABLE "imgposts" ADD CONSTRAINT "imgposts_postId_fkey" FOREIGN KEY ("postId") REFERENCES "posts"("id") ON DELETE CASCADE ON UPDATE CASCADE;
