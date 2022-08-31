-- AlterTable
ALTER TABLE "User" ALTER COLUMN "name" SET DEFAULT 'admin',
ALTER COLUMN "email" SET DEFAULT 'admin@admin',
ALTER COLUMN "password" SET DEFAULT 'admin123',
ALTER COLUMN "isAdmin" SET DEFAULT true,
ALTER COLUMN "isClient" SET DEFAULT false;
