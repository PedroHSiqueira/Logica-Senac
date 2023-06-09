const prompt = require("prompt-sync")()

const dinheiro = [2300, 3000, 1900, 4500, 2550, 2800]

const escolha = Number(prompt("Valor Minimo: "))

const maior = dinheiro.filter( num => num >= escolha)

console.log(maior.join(", "))