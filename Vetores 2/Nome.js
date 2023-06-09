const prompt = require("prompt-sync")()

const nomes = ["Silvana", "Juliano", "Ricardo", "Patrícia", "Bianca"]

const enfase = nomes.map(nome => nome.toUpperCase())

console.log(enfase.join(", "))