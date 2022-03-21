// Importar o Express

const express = require("express");

// Importar o contatosController

const contatosController = require("../controllers/ContatosController");

// Cria o roteador

const router = express.Router();

// Pede para o router definir uma rota:(método:get, endereço:/contatos)

router.get("/contatos", ContatosController.listarContatos);

// Exportar o router

module.exports = router;
