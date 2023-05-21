const prompt = require("prompt-sync")()

//entrada
const destino = prompt("Qual é o destino?: ")
const dias = Number(prompt("Quantos dias de viagem?: "))
const horas = Number(prompt("Quantos horas de viagem?: "))

//Processamento
const diahora = dias * 24
const total = diahora + horas

//saida

console.log("=" .repeat(30))
console.log(`a viagem para ${destino} dura ${total} horas`)
console.log("=" .repeat(30))