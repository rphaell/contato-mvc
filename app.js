// Importar o express

const express = require("express");

//  importar os reotadores

const ContatosRouter = require("./routes/ContatosRouter");

// criar uma aplicação com o express

const app = express();

// criar uma rota get no endereço'/' para responder requisição com a msg "olá"

app.get("/", (req, res) => res.send("Olá"));

// Usando os roteadores

app.use("/", ContatosRouter);

// levantar/rodar/executar a nossa aplicação

app.listen(3000, () => {
  console.log("Aplicação escutando na porta 3000");
});
