const prompt = require("prompt-sync")();

const numeros = [];

let contador = 0;

do {
  const x = Number(prompt("Numero: "));

  if (x == 0) {
    break;
  }

  numeros.push(x)
} while (true);

console.log(`Pares da lista`)
console.log("-".repeat(30))

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 == 0) {
    console.log(numeros[i]);
    contador++
  }
}

console.log("-".repeat(30))
console.log(`${contador} Pares`)
