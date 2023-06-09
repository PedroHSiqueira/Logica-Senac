const prompt = require("prompt-sync")();

const carro = [];
const preco = [];

do {
  const x = prompt("Modelo : ").toUpperCase();

  if (x == "FIM") {
    break;
  }

  const y = Number(prompt("Valor : "));

  carro.push(x);
  preco.push(y);
} while (true);

console.log(`Frete: R$ 500,00`)
console.log(`Tabela de preço`)
console.log("-".repeat(30))

for(let i = 0; i < carro.length; i++){
  console.log(`${carro[i]} - ${(preco[i] + 500).toFixed(2)}`)
}