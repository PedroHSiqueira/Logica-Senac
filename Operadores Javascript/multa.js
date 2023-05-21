const prompt = require("prompt-sync")()

const velPermitida = Number(prompt("velocidade permitida: "))
const velCondutor = Number(prompt("velocidade do condutor: "))
const porcentagem = ((velCondutor / velPermitida) -1) * 100

if (porcentagem <= 0){
    console.log("sem multa")
}
else if(porcentagem <= 20){
    console.log("infração leve")
}
else{
    console.log("infração grave")
}
