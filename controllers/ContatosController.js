// para DataTransferItemList, assumindo que o usuário logado é o usuarui de id 1

const uid = 1;

module.exports = {
  listarContatos: (req, res) => {
    // importando os contatos do usuario
    let contatos = require(`../database/contatos_${uid}.json`);
    // enviando a view para o cliente
    res.render("home.ejs", {});
  },

  capturarContato: (req, res) => {
    // importar contatos de usuarios
    let contatos = require(`../database/contatos_${uid}.json`);

    // descobrir o id do contato solicitado
    let idDoContato = req.params.id;

    // encontar no array de contatos, o contado solicitado
    let contato = contatos.find((c) => {
      return c.id == idDoContato;
    });

    // retornar o contato para o cliente ou uma msg de erro se o contato ñ existir

    if (contato === undefined) {
      res.send({ msg: "O contato solicitado não existe" });
    } else {
      res.send(contato);
    }
  },
};
