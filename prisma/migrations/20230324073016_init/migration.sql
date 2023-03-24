-- CreateTable
CREATE TABLE `Book` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `nbPages` INTEGER NOT NULL,
    `publishedAt` DATETIME(3) NOT NULL,
    `idAuthor` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE=INNODB;

-- CreateTable
CREATE TABLE `Category` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE=INNODB;

-- CreateTable
CREATE TABLE `CategoriesOnBooks` (
    `idCategory` INTEGER NOT NULL,
    `idBook` INTEGER NOT NULL,

    PRIMARY KEY (`idBook`, `idCategory`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE=INNODB;

-- CreateTable
CREATE TABLE `Author` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `firstName` VARCHAR(191) NOT NULL,
    `lastName` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE=INNODB;

-- AddForeignKey
ALTER TABLE `Book` ADD CONSTRAINT `Book_idAuthor_fkey` FOREIGN KEY (`idAuthor`) REFERENCES `Author`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CategoriesOnBooks` ADD CONSTRAINT `CategoriesOnBooks_idCategory_fkey` FOREIGN KEY (`idCategory`) REFERENCES `Category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CategoriesOnBooks` ADD CONSTRAINT `CategoriesOnBooks_idBook_fkey` FOREIGN KEY (`idBook`) REFERENCES `Book`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
