const prompt = require("prompt-sync")()

const num1 = prompt("Escolha o numero: ")
const raiz = Math.sqrt(num1)

//processamento
if(raiz % 1 !== 0){  //se o resto for diferente de 0 ele não possui raiz exata
    console.log(`o numero ${num1} não possui raiz exata`)
}
else{
    console.log(`o numero ${num1} tem ${raiz} como raiz quadrada`)
}