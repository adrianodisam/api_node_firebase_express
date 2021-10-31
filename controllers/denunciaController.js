'use strict';

const firebase = require('../db');
const denuncia = require('../models/denuncia');
const firestore = firebase.firestore();

const addDenuncia = async (req, res, next) => {
  try {
    const data = req.body;
    await firestore.collection('denuncias').doc().set(data);
    res.send('Record saved successfuly');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getAllDenuncia = async (req, res, next) => {
  try {
    const denuncias = await firestore.collection('denuncias');
    const data = await denuncias.get();
    const problemaArray = [];
    if (data.empty) {
      res.status(404).send('erro denúncia não encontrada');
    } else {
      data.forEach((doc) => {
        const problema = new denuncia(
          doc.id,
          doc.data().nome,
          doc.data().email,

          doc.data().cidade,
          doc.data().rua,
          doc.data().problema,

          doc.data().descricao,
        );
        problemaArray.push(problema);
      });
      res.send(problemaArray);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getDenuncia = async (req, res, next) => {
  try {
    const id = req.params.id;
    const denuncia = await firestore.collection('denuncias').doc(id);
    const data = await denuncia.onSnapshot();
    if (!data.exists) {
      res.status(404).send('nenhuma denúncia foi encontrada');
    } else {
      res.send(data.data());
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const updateDenuncia = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const denuncia = await firestore.collection('denuncias').doc(id);
    await denuncia.update(data);
    res.send('denúncia atulizada com sucesso');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const deleteDenuncia = async (req, res, next) => {
  try {
    const id = req.params.id;
    await firestore.collection('denuncias').doc(id).delete();
    res.send('denúncia deletada com sucesso');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  addDenuncia,
  getAllDenuncia,
  getDenuncia,
  updateDenuncia,
  deleteDenuncia,
};
