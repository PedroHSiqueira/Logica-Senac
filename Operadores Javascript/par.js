const prompt = require("prompt-sync")()

//elaborar um programa que mostre o numero par seguinte

const numero = Number(prompt("Escolha um numero: "))
let par = numero + 1

if((par % 2) == 0){
    console.log(`par seguinte é ${par}`)
}else if(par = (numero + 2)){
    console.log(`par seguinte é ${par}`)
}