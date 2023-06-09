const prompt = require("prompt-sync")();

const nome = [];
const idade = [];

const chamada = []

do {
  let x = prompt("Nome: ");

  if (x.toUpperCase() == "FIM") {
    break;
  }

  let y = Number(prompt("Idade: "))

  nome.push(x)
  idade.push(y)
} while (true);

for(let i = 0; i < nome.length; i++){

  if(idade[i] >= 60){
    chamada.push(nome[i])
  }
}

console.log(`Chamada`)
console.log("-".repeat(30))

for(let i = 0; i <chamada.length; i++){
  console.log(`${i + 1}. ${chamada[i]}`)
}
