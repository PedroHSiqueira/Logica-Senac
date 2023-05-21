const prompt = require("prompt-sync")()

//entrada de dados
const marca = prompt("qual a marca do carro: ")
const modelo = prompt("qual o modelo do veiculo: ")
const preco = Number(prompt("qual o valor do modelo: "))

//descontos

let desconto
if (marca == "Fiat"){
 desconto = preco * 0.10
}
else{
    desconto = preco * 0.20
}

const precoFinal = preco - desconto
console.log(`O modelo ${modelo} possui`)
console.log(`um desconto de ${desconto}`)
console.log(`o valor final fica em ${precoFinal}`)