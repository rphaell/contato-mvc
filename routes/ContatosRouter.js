// Importar o Express

const express = require("express");

// Importar o contatosController

const ContatosController = require("../controllers/ContatosController");

//Importar middlewares
// o middlware é colocado no router.get  entre o local  e a função sendo chamada do controllers.
const verificaAdimplencia = require("../middlewares/verificaAdimplencia");

// Cria o roteador

const router = express.Router();

// Pede para o router definir uma rota:(método:get, endereço:/contatos)

router.get("/contatos", verificaAdimplencia, ContatosController.listarContatos);

router.get("/contatos/:id", ContatosController.capturarContato);

// Exportar o router

module.exports = router;
