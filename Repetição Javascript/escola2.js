const prompt = require("prompt-sync")();

let continua;

let contador = 0
let total = 0

do {
  const nome = prompt("Nome do aluno: ");
  const nota = Number(prompt("Nota: "));

  if (nota >= 7) {
    console.log(`Parabéns ${nome}, você foi aprovado(a)`);
  } else {
    console.log(`Opss, ${nome} ... você foi reprovado(a)`);
  }

  contador++
  total += nota

  continua = prompt("Deseja continuar (S/N)").toUpperCase();
} while (continua == "S");

const media = total / contador
console.log(`média das notas: ${media.toFixed(1)}`)

console.log("Bye,bye");
