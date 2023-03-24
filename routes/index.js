const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const router = express.Router();
router.use(express.json());

/**
 * Authors
 */

// ✅
router.get('/authors', async (req, res, next) => {
  const authors = await prisma.author.findMany({});
  res.send(authors);
});

// ✅
router.post('/authors', async (req, res, next) => {
  try {    
    await prisma.author.create({
      data: {
        ...req.body
      }
    });
    res.send(`L'utilisateur ${req.body.firstName} ${req.body.lastName} a bien été ajouté`);
  } catch (error) {
    res.send(error);
  }
});

// Cas où const author est vide
router.get('/authors/:id', async (req, res, next) => {
  try {    
    const author = await prisma.author.findUnique({
      where: {
        id: parseInt(req.params.id)
      }
    });
    if (author) {
      res.send(author);
    } else {
      res.statusCode(404).send("L'utilisateur n'existe pas");
    }
  } catch (error) {
    res.send(error);
  }
});

// ✅
router.put('/authors/:id', async (req, res, next) => {
  try {    
    await prisma.author.update({
      data: {
        ...req.body
      },
      where: {
        id: parseInt(req.params.id)
      }
    });
    res.send("L'utilisateur a bien été mis à jour");
  } catch (error) {
    res.send(error);
  }
});

// ✅
router.delete('/authors/:id', async (req, res, next) => {
  try {    
    await prisma.author.delete({
      where: {
        id: parseInt(req.params.id)
      }
    });
    res.send("L'utilisateur a bien été supprimé");
  } catch (error) {
    res.send(error);
  }
});

/**
 * Books
 */

// ✅
router.get('/books', async (req, res, next) => {
  const books = await prisma.book.findMany({});
  res.send(books);
});

// ✅
router.post('/books', async (req, res, next) => {
  try {    
    await prisma.book.create({
      data: {
        ...req.body
      }
    });
    res.send(`Le livre a bien été ajouté`);
  } catch (error) {
    res.send(error);
  }
});

// ✅
router.get('/books/:id', async (req, res, next) => {
  try {    
    const author = await prisma.book.findUnique({
      where: {
        id: parseInt(req.params.id)
      }
    });
    if (author) {
      res.send(author);
    } else {
      res.statusCode(404).send("Le livre n'existe pas");
    }
  } catch (error) {
    res.send(error);
  }
});

// ✅
router.put('/books/:id', async (req, res, next) => {
  try {    
    await prisma.book.update({
      data: {
        ...req.body
      },
      where: {
        id: parseInt(req.params.id)
      }
    });
    res.send("Le livre a bien été mis à jour");
  } catch (error) {
    res.send(error);
  }
});

// ✅
router.delete('/books/:id', async (req, res, next) => {
  try {    
    await prisma.book.delete({
      where: {
        id: parseInt(req.params.id)
      }
    });
    res.send("Le livre a bien été supprimé");
  } catch (error) {
    res.send(error);
  }
});

/**
 * Category
 */

router.get('/categories', async (req, res, next) => {
  const categories = await prisma.category.findMany({});
  res.send(categories);
});

router.post('/categories', async (req, res, next) => {
  try {    
    await prisma.category.create({
      data: {
        ...req.body
      }
    });
    res.send(`La catégorie a bien été ajouté`);
  } catch (error) {
    res.send(error);
  }
});

router.get('/categories/:id', async (req, res, next) => {
  try {    
    const author = await prisma.category.findUnique({
      where: {
        id: parseInt(req.params.id)
      }
    });
    if (author) {
      res.send(author);
    } else {
      res.statusCode(404).send("La catégorie n'existe pas");
    }
  } catch (error) {
    res.send(error);
  }
});

router.put('/categories/:id', async (req, res, next) => {
  try {    
    await prisma.category.update({
      data: {
        ...req.body
      },
      where: {
        id: parseInt(req.params.id)
      }
    });
    res.send("La catégorie a bien été mis à jour");
  } catch (error) {
    res.send(error);
  }
});

router.delete('/categories/:id', async (req, res, next) => {
  try {    
    await prisma.category.delete({
      where: {
        id: parseInt(req.params.id)
      }
    });
    res.send("La catégorie a bien été supprimé");
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
