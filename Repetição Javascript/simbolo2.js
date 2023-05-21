const prompt = require("prompt-sync")()

let simbolo = prompt("simbolo: ")
const nome = prompt("Nome: ")
const vezes = Number(prompt("numero de vezes: "))

let resposta = 0 
for(let i = 0; i < vezes; i++){
  simbolo += "*"
}

console.log(`${simbolo} ${nome} ${simbolo}`)