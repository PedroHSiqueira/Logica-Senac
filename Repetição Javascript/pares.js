const prompt = require("prompt-sync")()

const num = Number(prompt("Numero: "))

let resposta = 0
for(let i = num; i >= 1; i--){

  if(i % 2 == 0){
    resposta = resposta + i + " "
  }
}
console.log(`pares entra ${num} e 1 : ${resposta}`)