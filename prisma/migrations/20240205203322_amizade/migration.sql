/*
  Warnings:

  - A unique constraint covering the columns `[profileReceiveId,profileSendId]` on the table `FriendRequest` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "FriendRequest_profileReceiveId_key";

-- DropIndex
DROP INDEX "FriendRequest_profileSendId_key";

-- CreateIndex
CREATE UNIQUE INDEX "FriendRequest_profileReceiveId_profileSendId_key" ON "FriendRequest"("profileReceiveId", "profileSendId");
