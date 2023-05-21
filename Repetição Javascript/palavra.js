const prompt = require("prompt-sync")()

const palavra = prompt("Palavra: ")
const numero = Number(prompt("Quantas vezes: "))

let resposta = " "
for(let i = 1; i < numero; i++){
  resposta = resposta + palavra + " * "
}
console.log(resposta + palavra)