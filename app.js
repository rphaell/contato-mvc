// Importar o express

const express = require("express");

//  importar os reotadores

const ContatosRouter = require("./routes/ContatosRouter");
const UsuariosRouter = require("./routes/UsuariosRouter");

// criar uma aplicação com o express

const app = express();

// Configurar o EJS como seu template engine
app.set("view engine", "ejs");

// Configurando a pasta public para arquivos estaticos

app.use(express.static("public"));

// criar uma rota get no endereço'/' para responder requisição com a msg "olá"

app.get("/", (req, res) => res.send("Olá"));

// Usando os roteadores

app.use("/", ContatosRouter);
app.use("/", UsuariosRouter);

// levantar/rodar/executar a nossa aplicação

app.listen(3000, () => {
  console.log("Aplicação escutando na porta 3000");
});
