const bcrypt = require("bcrypt");
const fs = require("fs");
const path = require("path");

module.exports = {
  showRegistrar: (req, res) => {
    res.render("registro");
  },
  store: (req, res) => {
    //capturar as informações que o ususário digitou
    let { nome, email, senha } = req.body;

    // importar o array de usuários
    let usuarios = require("../database/usuarios.json");

    //determinar o novo idNovo do usuarios
    let idNovo = usuarios[usuarios.length - 1].id + 1;

    //criar as senhas criptografada

    let senhaCriptografada = bcrypt.hashSync(senha, 10);
    // res.send(
    //   `a senha ${senha} foi criptografada para a senha ${senhaCriptografada}`
    // criar um objeto com os dados do usuário
    let usuario = {
      id: idNovo,
      nome: nome,
      email: email,
      senha: senhaCriptografada,
    };

    // add o novo usuário a este array de usuários

    usuarios.push(usuario);

    // salvar este array no arquivo usuarios.json
    fs.writeFileSync(
      path.join(__dirname, "/../database/usuarios.json"),
      JSON.stringify(usuarios, null, 4)
    );

    // res.send("salvou!");

    // res.send(usuarios)

    // direcionando o usuario para a rota GET /
    res.redirect("/contatos");
  },
};
