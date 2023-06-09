const prompt = require("prompt-sync")()

let numero = Number(prompt(`Numero: `))

let soma = 0
let divisores = " "
for(let i = 1; i < numero ; i++){
    
    if(numero % i == 0){
        divisores = divisores + i + ", "

        soma = soma + i
    }
}


console.log(`Divisores: ${divisores} `)
console.log(`Soma: ${soma}`)

if(soma == numero){
    console.log(`${numero} é um número Perfeito`)
}else{
    console.log(`${numero} não é um número Perfeito`)
}
