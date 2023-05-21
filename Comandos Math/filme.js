const prompt = require("prompt-sync")()

//Entrada
const nome = prompt("Qual é o nome do filme?: ")
const duracao = prompt("Qual a duração do filme?: ")

//processamento
const hora = Math.floor(duracao / 60)
const minutos = duracao % 60


//saida
console.log("=" .repeat(50))
console.log(`Filme: ${nome}`)
console.log(`Duração (min): ${duracao}`)
console.log(`O filme ${nome}`)
console.log(`Tem a duração de ${hora} horas e ${minutos} minutos`)
console.log("=" .repeat(50))