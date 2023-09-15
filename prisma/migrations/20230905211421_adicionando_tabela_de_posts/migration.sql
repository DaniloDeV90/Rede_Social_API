-- CreateTable
CREATE TABLE "posts" (
    "id" TEXT NOT NULL,
    "descricao" TEXT,
    "ProfileId" TEXT NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "posts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "imgposts" (
    "id" TEXT NOT NULL,
    "imgUrl" TEXT,
    "postId" TEXT NOT NULL,

    CONSTRAINT "imgposts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "imgposts_postId_key" ON "imgposts"("postId");

-- AddForeignKey
ALTER TABLE "posts" ADD CONSTRAINT "posts_ProfileId_fkey" FOREIGN KEY ("ProfileId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "imgposts" ADD CONSTRAINT "imgposts_postId_fkey" FOREIGN KEY ("postId") REFERENCES "posts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
