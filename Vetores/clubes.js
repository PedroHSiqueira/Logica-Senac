const prompt = require("prompt-sync")()

const clubes = []


for (let i = 0; i <= 9 ; i++) {
    clubes[i] = prompt(`${i + 1}º clube: `);
}

console.log("jogos")
console.log("=".repeat(30))

for(let i = 0; i <= 9; i = i + 2){
    console.log(`${clubes[i]} vs ${clubes[i + 1]}`)
}