const prompt = require("prompt-sync")()

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const escolha = Number(prompt("Escolha um numero: "))

const filtro = numeros.filter(num => num > escolha)

console.log("Numero: " + numeros.join(", "))
console.log("Maior: " + filtro.join(", "))