const prompt = require("prompt-sync")()

const alunos = Number(prompt("Quantos incritos: "))
const turma = Math.floor(alunos / 30)
const sobra = 30 - (alunos % 30)

console.log(`alunos incritos : ${alunos}`)
console.log(`Turmas fechadas: ${turma}`)
console.log(`Quantos faltam para uma nova turma: ${sobra}`)

