const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const router = express.Router();
router.use(express.json());

router.route('/')
  .get(async (req, res, next) => {
    const authors = await prisma.author.findMany({});
    res.send(authors);
  })
  .post(async (req, res, next) => {
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

router.route('/:id')
  .get(async (req, res, next) => {
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
  })
  .put(async (req, res, next) => {
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
  })
  .delete(async (req, res, next) => {
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

module.exports = router;