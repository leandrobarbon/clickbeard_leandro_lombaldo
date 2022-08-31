-- AlterTable
ALTER TABLE "User" ADD COLUMN     "age" INTEGER,
ADD COLUMN     "isAdmin" BOOLEAN,
ADD COLUMN     "isClient" BOOLEAN,
ADD COLUMN     "specialty" TEXT[],
ALTER COLUMN "password" DROP NOT NULL;
