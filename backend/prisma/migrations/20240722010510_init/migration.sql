/*
  Warnings:

  - The primary key for the `Member` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Task` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `priority` on the `Task` table. The data in that column could be lost. The data in that column will be cast from `VarChar(5)` to `Enum(EnumId(0))`.

*/
-- DropForeignKey
ALTER TABLE `Task` DROP FOREIGN KEY `Task_memberId_fkey`;

-- AlterTable
ALTER TABLE `Member` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `Task` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    MODIFY `priority` ENUM('Baixa', 'Media', 'Alta') NOT NULL DEFAULT 'Baixa',
    MODIFY `memberId` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AddForeignKey
ALTER TABLE `Task` ADD CONSTRAINT `Task_memberId_fkey` FOREIGN KEY (`memberId`) REFERENCES `Member`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
