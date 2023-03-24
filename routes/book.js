const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const router = express.Router();
router.use(express.json());

router.route('/')
  .get(async (req, res, next) => {
    const books = await prisma.book.findMany({});
    res.send(books);
  })
  .post(async (req, res, next) => {
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
  })

router.route('/:id')
  .get(async (req, res, next) => {
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
  })
  .put(async (req, res, next) => {
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
  })
  .delete(async (req, res, next) => {
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


router.route('/:id/categories')
  .get(async (req, res, next) => {
    try {    
      const category = await prisma.book.findMany({
        where: {
          id: parseInt(req.params.id)
        },
        select: {
          categories: true
        }
      });
      if (category) {
        res.send(category);
      } else {
        res.statusCode(404).send("L'utilisateur n'existe pas");
      }
    } catch (error) {
      res.send(error);
    }
  });

module.exports = router;
