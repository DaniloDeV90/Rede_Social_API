-- CreateEnum
CREATE TYPE "statusPedido" AS ENUM ('ACEITO', 'NEGADO', 'ESPERA');

-- CreateTable
CREATE TABLE "FriendRequest" (
    "id" TEXT NOT NULL,
    "profileSendId" TEXT NOT NULL,
    "profileReceiveId" TEXT NOT NULL,
    "status" "statusPedido" NOT NULL,

    CONSTRAINT "FriendRequest_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "FriendRequest_profileSendId_key" ON "FriendRequest"("profileSendId");

-- CreateIndex
CREATE UNIQUE INDEX "FriendRequest_profileReceiveId_key" ON "FriendRequest"("profileReceiveId");

-- AddForeignKey
ALTER TABLE "FriendRequest" ADD CONSTRAINT "FriendRequest_profileReceiveId_fkey" FOREIGN KEY ("profileReceiveId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FriendRequest" ADD CONSTRAINT "FriendRequest_profileSendId_fkey" FOREIGN KEY ("profileSendId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
