const prompt = require("prompt-sync")()

const noticias = []

do {
    let materia = prompt("Noticia: ")

    noticias.push(materia)

} while (noticias.length < 10);

const repetir = Number(prompt("Quantas Notícias Exibir: "))

const final = noticias.reverse()

for(let i = 0; i < repetir; i++){
    console.log(final[i])
}