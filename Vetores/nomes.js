const prompt = require("prompt-sync")()

const nomes = ["Pedro", "João", "Carlos", "Maria"]

const prefixos = nomes.map(nome => "Sr(a): " + nome)

console.log(nomes.join(", "))
console.log(prefixos.join(", "))