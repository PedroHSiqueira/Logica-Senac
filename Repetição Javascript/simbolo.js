const prompt = require("prompt-sync")();

const simbolo1 = prompt("Qual o primeiro simbolo: ");
const simbolo2 = prompt("Qual o segundo simbolo: ");
const numero = Number(prompt("Numero de vezes: "));

let resposta = " ";
for (let i = 0; i < numero; i++) {
  if(i % 2 == 1){
    resposta = resposta + simbolo1
  }else{
    resposta = resposta + simbolo2
  }
}
console.log(resposta)
