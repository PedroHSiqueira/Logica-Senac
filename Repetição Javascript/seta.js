const prompt = require("prompt-sync")()

let numero = Number(prompt("Digite um número: "));

for(let i = 1; i <=numero; i++){
  let simbolo = "*".repeat(i)
  console.log(simbolo)
}

for(let i = numero - 1; i >= 1 ;i--){
  let simbolo = "*".repeat(i)
  console.log(simbolo)
}