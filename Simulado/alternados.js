const prompt = require("prompt-sync")()

const numeros = []
const categoria = []

do {
  const x = Number(prompt("Numero: "))

  if( x == 0){
    break
  }

  numeros.push(x)
  
} while (true);

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 == 0) {
    categoria.push("Par")
  }else{
    categoria.push("Impar")
  }
}

console.log("=".repeat(30))

console.log(`Numero: ${numeros}`)
console.log(`Categoria: ${categoria}`)

console.log("=".repeat(30))