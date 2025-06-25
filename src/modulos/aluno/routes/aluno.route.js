const express = require('express');
const alunoController = require('../controllers/aluno.controller')

const router = express.Router()

// rota de cadastro
router.post('/cadastrar', alunoController.cadastrar);

module.exports = router