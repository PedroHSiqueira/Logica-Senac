const prompt = require("prompt-sync")();

const numero = Number(prompt("Qual o numero: "));

let resposta = " "
if (numero < 5) {
  console.log(`Ops... Número deve ser maior ou igual a 5`);
} else {
  for (let i = 5; i <= numero; i += 5) {
    resposta = resposta + i + " "
  }
}
console.log(`multiplos de 5 : ${resposta}`)
