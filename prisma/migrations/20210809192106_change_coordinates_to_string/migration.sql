-- AlterTable
ALTER TABLE "opportunity" ALTER COLUMN "lat" SET DEFAULT E'-1000',
ALTER COLUMN "lat" SET DATA TYPE TEXT,
ALTER COLUMN "long" SET DEFAULT E'-1000',
ALTER COLUMN "long" SET DATA TYPE TEXT;
