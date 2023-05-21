const prompt = require("prompt-sync")()

const valor = Number(prompt("Qual o valor que queres sacar?: "))
const notas = 10

const saque = (valor % notas)
if(saque > 0){        //se o resto for maior que 0 quer dizer que irá possuir centavos na conta, por isso não podera ser sacado
    console.log(`este valor não pode ser sacado em notas de ${notas} reais`)
}else{
    console.log(`Saque efetuado, ira receber ${valor / notas} em notas de ${notas}`)
}
