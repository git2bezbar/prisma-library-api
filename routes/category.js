const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const router = express.Router();
router.use(express.json());

router.route('/')
  .get(async (req, res, next) => {
    const categories = await prisma.category.findMany({});
    res.send(categories);
  })
  .post(async (req, res, next) => {
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

router.route('/:id')
  .get(async (req, res, next) => {
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
  })
  .put(async (req, res, next) => {
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
  })
  .delete(async (req, res, next) => {
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
