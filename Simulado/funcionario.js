const prompt = require("prompt-sync")();

let funcionarios= Number(prompt("Numero atual: "));

console.log(`Nº Funcionários em 2023: ${funcionarios}`)

console.log(`Previsão para os próximos 5 anos`)
console.log("-".repeat(30))

let ano = Number(2023)
let clt = funcionarios

for(let i = 1; i <= 5; i++){
    ano = ano + 1
    clt *= 2
    console.log(`em ${ano}: ${clt} funcionarios `)
}