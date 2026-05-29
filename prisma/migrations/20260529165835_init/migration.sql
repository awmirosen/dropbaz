-- CreateTable
CREATE TABLE "clipboard" (
    "id" TEXT NOT NULL,
    "url" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "content" TEXT NOT NULL,

    CONSTRAINT "clipboard_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "clipboard_url_key" ON "clipboard"("url");
