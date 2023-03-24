-- DropForeignKey
ALTER TABLE `book` DROP FOREIGN KEY `Book_idAuthor_fkey`;

-- DropForeignKey
ALTER TABLE `categoriesonbooks` DROP FOREIGN KEY `CategoriesOnBooks_idBook_fkey`;

-- DropForeignKey
ALTER TABLE `categoriesonbooks` DROP FOREIGN KEY `CategoriesOnBooks_idCategory_fkey`;

-- AddForeignKey
ALTER TABLE `Book` ADD CONSTRAINT `Book_idAuthor_fkey` FOREIGN KEY (`idAuthor`) REFERENCES `Author`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CategoriesOnBooks` ADD CONSTRAINT `CategoriesOnBooks_idCategory_fkey` FOREIGN KEY (`idCategory`) REFERENCES `Category`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CategoriesOnBooks` ADD CONSTRAINT `CategoriesOnBooks_idBook_fkey` FOREIGN KEY (`idBook`) REFERENCES `Book`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
