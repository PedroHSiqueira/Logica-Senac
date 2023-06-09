const prompt = require("prompt-sync")()

const produtos = []
const precos = []

let total = 0
do {
    const x = prompt("Nome do produto: ").toUpperCase()

    if( x == "FIM"){
        break
    }

    const y = Number(prompt("Preço: "))

    //adiciona os dados aos vetores
    produtos.push(x)
    precos.push(y)

    total += y
} while (true);

console.log("\n Nota Fiscal")
console.log("-".repeat(40))

//produtos.lenght: retorna o tamanho do vetor

for(let i = 0; i < produtos.length; i++){
    console.log(`${produtos[i]} - ${precos[i].toFixed(2)}`)

}
console.log(`Total : ${total.toFixed(2)}`)
console.log("-".repeat(40))


