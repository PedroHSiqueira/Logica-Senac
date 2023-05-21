const prompt = require("prompt-sync")()

//variaveis
const prod = prompt("Qual é o produto?:")
const preco = Number(prompt("Qual o Valor?:"))
const desc = Math.floor(preco) * 2

//saida de dados
console.log("=" .repeat(60))
console.log(`Produto: ${prod}`)
console.log(`Preço: R$${preco.toFixed(2)}`)
console.log(`Promoção de aspirina`)
console.log(`Na compra de 2 unidades, o Valor final fica em R$${desc.toFixed(2)}`)
console.log("=" .repeat(60))