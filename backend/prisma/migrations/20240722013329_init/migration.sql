/*
  Warnings:

  - You are about to drop the `Member` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Task` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Task` DROP FOREIGN KEY `Task_memberId_fkey`;

-- DropTable
DROP TABLE `Member`;

-- DropTable
DROP TABLE `Task`;

-- CreateTable
CREATE TABLE `tasks` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(50) NOT NULL,
    `description` VARCHAR(140) NULL,
    `finalized` BOOLEAN NOT NULL DEFAULT false,
    `endDate` DATETIME(3) NULL,
    `priority` ENUM('Baixa', 'Media', 'Alta') NOT NULL DEFAULT 'Baixa',
    `memberId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `members` (
    `id` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `name` VARCHAR(50) NOT NULL,
    `password` VARCHAR(50) NOT NULL,

    UNIQUE INDEX `members_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `tasks` ADD CONSTRAINT `tasks_memberId_fkey` FOREIGN KEY (`memberId`) REFERENCES `members`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
