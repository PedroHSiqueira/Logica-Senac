const prompt = require("prompt-sync")()

const lado1 = Number(prompt("qual o tamanho do 1° lado: "))
const lado2 = Number(prompt("qual o tamanho do 2° lado: "))
const lado3 = Number(prompt("qual o tamanho do 3° lado: "))

if(lado1 < lado2 + lado3 && lado2 < lado1 + lado3 && lado3 < lado1 + lado2){

    let tipo 

    if(lado1 === lado2 && lado2 === lado3){
        tipo = "equilatero"
    }
    else if(lado1 === lado2 || lado1 === lado3 || lado2 === lado3){
        tipo = "isóceles"
    }
    else{
        tipo = "escaleno"
    } 
    console.log(`pode se formar um triangulo do tipo ${tipo} `)
}   
else{
    console.log(`Um tringulo não pode ser formado`)
}