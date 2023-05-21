const prompt = require("prompt-sync")()

const horaBr = Number(prompt("Que horas são no Brasil?: "))
let horaFr = horaBr + 5
let turno

if(horaFr >= 24){
    horaFr -=24
}
if(horaFr >= 1 && horaFr <= 12 ){
    turno = "manhã"
}else if(horaFr > 12 && horaFr < 19){
    turno = "tarde"
}else{
    turno = "noite"
}

console.log(`é de ${turno} atualmente na frança e são ${horaFr} horas`)