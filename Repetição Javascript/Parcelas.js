const prompt = require("prompt-sync")()

const produto = prompt("Qual é o produto: ")
const valor = Number(prompt("Qual o valor: "))

console.log(produto)
console.log("Opções de pagamento")
console.log("=".repeat(20))

for(let parcela = 1; parcela <= 10; parcela++){
    console.log(`${parcela} x R$${(valor / parcela).toFixed(1)}`)
}
console.log("=".repeat(20))