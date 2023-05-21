const prompt = require("prompt-sync")()

let aprovado = 0
let reprovado = 0

let continua
do {
    let disciplina = prompt("Nome da disciplina: ")
    let conceito = prompt("Qual o conceito: ").toUpperCase()

    if(conceito == "A" || conceito == "B" || conceito == "C" ){
        aprovado += 1
    }
    else{
        reprovado += 1
    }

    continua = prompt("Deseja continuar (S/N): ").toUpperCase()
} while (continua == 'S');  

console.log(`Resumo da disciplina`)
console.log("-".repeat(30))
console.log(`Aprovado: ${aprovado} disciplina(s)`)
console.log(`Reprovado: ${reprovado} displina(s)`)