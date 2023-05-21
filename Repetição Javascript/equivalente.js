const prompt = require("prompt-sync")();

const num = Number(prompt("Numero: "))

let resposta = 0

if(num < 0){
  for(let i = num; i <= (num * -1); i++){
    resposta = resposta + i + " "
  }
}else{
  for(let i = num; i >= (num * -1); i--)
    resposta = resposta + i + " "
}

console.log(`entre ${num} e ${num * -1}: ${resposta}`)