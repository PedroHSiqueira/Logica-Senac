const prompt = require("prompt-sync")()

let negativo = 0

let continuar
do {
  const nome = prompt("Nome do cliente: ")
  const saldo = Number(prompt("Qual o saldo da conta: "))

  if(saldo < 0){
    negativo += 1
  }

  continuar = prompt("Deseja continuar (S/N): ").toUpperCase()
} while (continuar == "S");

console.log("-".repeat(30))
console.log(`Nº de Clientes com saldo negativo: ${negativo}`)