const prompt = require("prompt-sync")()

const nome = prompt("Qual é o seu nome:")
const genero = prompt("Qual é o seu gênero:")
const altura = prompt("Qual a sua altura:")

let pesoIdeal
if(genero == "M" || genero == "m"){
    pesoIdeal = (72.7 * altura) - 58
}
else{
    pesoIdeal = (62.1 * altura) - 44.7
}

console.log(`nome:${nome} \n sexo:${genero} \n altura:${altura} \n peso ideal:${pesoIdeal.toFixed(2)}`)