const prompt = require("prompt-sync")()

const materia = prompt("materia: ")
const tri1 = Number(prompt("Nota 1 trimestre: "))
const tri2 = Number(prompt("Nota 2 trimestre: "))
const soma = tri1 + tri2
const falta = 60 - soma

let aprovado
if(soma < 20){
    console.log(`voce esta reprovado em ${materia}`)
}
else if(soma > 20 && soma < 60){
    console.log(`falta apenas ${falta} para ser aprovado em ${materia}`)
}
else{
    console.log(`Parabéns, está aprovado`)
}
