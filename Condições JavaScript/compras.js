const prompt = require("prompt-sync")()

//entrada de dados

const produto = prompt("qual é o produto: ")
const valor = Number(prompt("Qual o valor do produto: "))

//processamento
const parcela = valor / 3

if (valor < 100){
    console.log(`Nome do Produto: ${produto}`)
    console.log(`este produto só pode ser pago á vista`)
}
else{
    console.log(`Nome do Produto: ${produto}`)
    console.log(`este produto pode ser pago em até 3x de ${parcela.toFixed(2)}`)
}