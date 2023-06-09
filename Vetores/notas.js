const prompt = require("prompt-sync")();

const alunos = [];
const notas = [];

do {
  const x = prompt("Nome do aluno: ").toUpperCase();
  if (x == "FIM") {
    break;
  }
  const y = Number(prompt("Nota: "));
  alunos.push(x);
  notas.push(y);
} while (true);

console.log(`\n Aprovados`);
console.log("-".repeat(40));

for (let i = 0; i < alunos.length; i++) {
  if (notas[i] >= 7) {
    console.log(`${alunos[i]} - ${notas[i]}`);
  }
}

console.log(`\n Reprovados`);
console.log("-".repeat(40));

for (let i = 0; i < alunos.length; i++) {
  if (notas[i] < 7) {
    console.log(`${alunos[i]} - ${notas[i]}`);
  }
}