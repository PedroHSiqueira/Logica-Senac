const prompt = require("prompt-sync")();

const valor = Number(prompt("Valor depositado: "));
const tempo = Number(prompt("tempo : "));

let preco;
if (tempo <= 30) {
  preco = 1;
} else if (tempo <= 60) {
  preco = 1.75;
} else {
  preco = 3;
}

troco = valor - preco;
if (valor < preco) {
  console.log(`Saldo Invalido`);
} else {
  console.log(`troco: ${troco}`);
}
