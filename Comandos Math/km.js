const prompt = require("prompt-sync")()

//Entrada
const distancia = Number(prompt("qual é a distancia?: "))

//Processamento
const km = Math.floor(distancia / 1000)
const metros = distancia % 1000

//saida

console.log("=" .repeat(30))
console.log(`Distancia Percorrida (m): ${distancia}`)
console.log(`Equivale a ${km}km e ${metros}m`)
console.log("=" .repeat(30))