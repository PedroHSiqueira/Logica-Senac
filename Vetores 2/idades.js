const prompt = require("prompt-sync")()

const idades = [ 18, 24, 16, 25, 32, 30]

const proximoAno = idades.map(num => num + 1)

console.log(proximoAno.join(", "))