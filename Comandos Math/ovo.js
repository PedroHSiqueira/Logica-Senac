const prompt = require("prompt-sync")()

//entrada
const ovo = Number(prompt("quantos ovos?:"))

//processamento
const caixa = ovo / 12
const sobra = ovo % 12

//saida
console.log("=" .repeat(30))
console.log(`N° de caixas (Dúzias): ${Math.floor(caixa)}`)
console.log(`Sobraram : ${sobra}`)
console.log("=" .repeat(30))