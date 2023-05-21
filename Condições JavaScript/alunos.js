const prompt = require("prompt-sync")()

//entrada de dados
const nome = prompt("qual o nome do aluno: ")
const anos = Number(prompt("ano de nascimento:"))

//processamento
const idade = 2023 - anos
console.log(idade)

if (idade <= 17) {
    console.log(`${nome}, Você é menor de idade`)
}
else{
    console.log(`${nome}, Você é maior de idade`)
}