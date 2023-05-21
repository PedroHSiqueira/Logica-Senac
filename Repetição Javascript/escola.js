const prompt = require("prompt-sync")();

const nome = prompt("Nome do aluno: ");
const nota = Number(prompt("Nota: "));

let continua;
do {
  if (nota >= 7) {
    console.log(`Parabéns ${nome}, você foi aprovado(a)`);
  } else {
    console.log(`Opss, ${nome} ... você foi reprovado(a)`);
  }

  continua = prompt("Deseja continuar (S/N)").toUpperCase();
} while (continua == "S");

console.log("Bye,bye")
