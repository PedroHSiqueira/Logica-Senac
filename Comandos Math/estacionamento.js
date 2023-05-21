const prompt = require("prompt-sync")()

//entrada
const entrada = Number(prompt("Qual a hora de entrada?: "))
const saida = Number(prompt("Qual a hora de saída?: "))

//Processamento
const hora = Math.ceil(saida - entrada)
const valor = hora * 5

//saida
console.log("=" .repeat(30))
console.log(`Hora da entrada: ${entrada.toFixed(2)}`)
console.log(`Hora da Saída: ${saida.toFixed(2)}`)
console.log(`Cobrar por: ${hora}h`)
console.log(`Valor total: R$${valor}`)
console.log("=" .repeat(30))