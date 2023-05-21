const prompt = require("prompt-sync")()

//entrada de dados
const numero = Number(prompt("digite um numero: "))

//processamento
const poui = numero % 2

//saida
if(poui == 0){
    console.log(`O número é par`)
}
else{
    console.log(`O número é ímpar`)
}