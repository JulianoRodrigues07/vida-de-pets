/*
  Warnings:

  - Added the required column `nomePet` to the `Agendamento` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Agendamento" ADD COLUMN     "nomePet" TEXT NOT NULL;
