//importar a biblioteca nativa de manipulação de arquivo
const fs = require("fs");

// criar e exportar uma funcao middleware
// a função deve registrar a data e a hora em que a req foi realizada.
module.exports = (req, res, next) => {
  //capturar a string com a data e a hora

  let dataHora = new Date().toISOString();

  //escrever em um arquivo com quebra de linha usando ('\n')
  fs.writeFileSync("hora_acessado.txt", dataHora + "\n", { flag: "a+" });

  //executar a função next para direcionar a req para o próximo middleware
  next();
};
