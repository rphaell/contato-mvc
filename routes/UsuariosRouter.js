// Importar o Express

const express = require("express");

// Importar o UsuariosController

const UsuariosController = require("../controllers/UsuariosController");

// Cria o roteador

const router = express.Router();

// Pede para o router definir uma rota:(método:get, endereço:/contatos)

router.get("/registrar", UsuariosController.showRegistrar);
router.post("/usuarios", UsuariosController.store);
router.get("/login", UsuariosController.mostrarLogin);

// Exportar o router

module.exports = router;
