-- CreateTable
CREATE TABLE "cadastros" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "data_nasc" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "cadastros_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "cadastros_email_key" ON "cadastros"("email");
