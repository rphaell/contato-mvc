// Importar dependências
const session = require("express-session");
const express = require("express");

//  importar os reotadores

const ContatosRouter = require("./routes/ContatosRouter");
const UsuariosRouter = require("./routes/UsuariosRouter");

//importar os middlewares
const marcaEntradaDaRequisicao = require("./middlewares/marcaEntradaDeRequisicao");

// criar uma aplicação com o express

const app = express();

// Configurar o EJS como seu template engine
app.set("view engine", "ejs");

// Configurando o uso da session
app.use(
  session({
    secret: "segredo",
    resave: false,
    saveUninitialized: false,
  })
);

// aplicando middleware globais
app.use(marcaEntradaDaRequisicao);

// Configurando a pasta public para arquivos estaticos

app.use(express.static("public"));

//configura o req.body para conter as informações digitadas pelo user.
app.use(express.urlencoded({ extended: false }));

// criar uma rota get no endereço'/' para responder requisição com a msg "olá"

app.get("/", (req, res) => res.send("Olá"));

// Usando os roteadores

app.use("/", ContatosRouter);
app.use("/", UsuariosRouter);

// levantar/rodar/executar a nossa aplicação

app.listen(3000, () => {
  console.log("Aplicação escutando na porta 3000");
});
