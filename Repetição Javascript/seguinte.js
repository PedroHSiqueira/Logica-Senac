const prompt = require("prompt-sync")()

const num = Number(prompt("Qual é o numero: "))

let resposta = " "
for(let i = num + 1; i <= num + 10; i++){
    resposta = resposta + i + " "
}
console.log(`Numero Seguinte a ${num}: ${resposta}`)