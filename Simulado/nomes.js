const prompt = require('prompt-sync')()

let nomes = []

do {
  const x = prompt("Nome: ")

  if(x.toUpperCase() == "FIM"){
    break
  }

  nomes.push(x)

} while (true);

let letra = prompt("Digite uma letra:");

let nomesFiltrados = nomes.filter(nome => nome.includes(letra));

if (nomesFiltrados.length > 0) {
  console.log("=".repeat(30))
  console.log("Nomes encontrados:");
  console.log(nomesFiltrados);
  console.log("=".repeat(30))
} else {
  console.log("Nenhum nome encontrado com a letra informada.");
}
