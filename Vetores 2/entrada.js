const prompt = require('prompt-sync')()

const total = [40000, 50000, 32000, 60000, 45000]

const entrada = total.map(num => num * 0.30)

console.log(total.join(", "))
console.log(entrada.join(", "))