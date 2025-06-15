-- CreateEnum
CREATE TYPE "ExperienceLevel" AS ENUM ('NEW', 'SOME', 'EXPERIENCED');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "dateOfBirth" TIMESTAMP(3) NOT NULL,
    "manageAnxiety" BOOLEAN NOT NULL DEFAULT false,
    "combatDepression" BOOLEAN NOT NULL DEFAULT false,
    "reduceStress" BOOLEAN NOT NULL DEFAULT false,
    "improveSleep" BOOLEAN NOT NULL DEFAULT false,
    "betterRelationships" BOOLEAN NOT NULL DEFAULT false,
    "practiceSelfCare" BOOLEAN NOT NULL DEFAULT false,
    "buildConfidence" BOOLEAN NOT NULL DEFAULT false,
    "increaseMindfulness" BOOLEAN NOT NULL DEFAULT false,
    "experienceLevel" "ExperienceLevel" NOT NULL DEFAULT 'NEW',
    "dailyCheckIns" BOOLEAN NOT NULL DEFAULT false,
    "wellnessReminders" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
