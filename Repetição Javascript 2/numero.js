const prompt = require("prompt-sync")();

let contador = 0;
let total = 0;
let maior = 0;


let numero;
do {
  numero = Number(prompt("Numero: "));
  contador++;
  total += numero;

  if (numero > maior) {
    maior = numero;
  }
} while (numero != 0);

console.log("-".repeat(30));
console.log(`numeros digitados: ${contador}`);
console.log(`soma dos numeros: ${total}`);
console.log(`Maior numero: ${maior}`);
