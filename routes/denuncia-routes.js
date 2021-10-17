const express = require('express');
const {
  addDenuncia,
  getAllDenuncia,
  getDenuncia,
  updateDenuncia,
  deleteDenuncia,
} = require('../controllers/denunciaController');

const router = express.Router();

router.post('/denuncia', addDenuncia);
router.get('/denuncias', getAllDenuncia);
router.get('/denuncia/:id', getDenuncia);
router.put('/denuncia/:id', updateDenuncia);
router.delete('/denuncia/:id', deleteDenuncia);

module.exports = {
  routes: router,
};
