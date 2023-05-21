const prompt = require("prompt-sync")()

const num = Number(prompt("Qual o numero: "))

for(let i = num; i > 0; i--){
  console.log(i)
}
console.log("Fogo!")