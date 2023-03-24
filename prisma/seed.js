const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const { faker } = require('@faker-js/faker');

async function main() {
  const books = await prisma.book.findMany({});
  const categories = await prisma.category.findMany({});

  for(let i=1; i<books.length; i++) {
    for(let j=1; j<categories.length; j++) {
      if (Math.random() < 0.2) {
        await prisma.categoriesOnBooks.create({
          data: {
            idCategory: j,
            idBook: i,
          }
        });
      }
    } 
  }
}

main()
  .then(async() => {
    await prisma.$disconnect()
  })
  .catch(async(e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })