const prompt = require("prompt-sync")()

const nomes = ["Silvana", "Juliano", "Ricardo", "Patrícia", "Bianca"]

const pesquisa = prompt("Informe o nome: ").toUpperCase()

const nomes2 = nomes.filter(nome => nome.toUpperCase() == pesquisa)

if(nomes2.length == 0 ){
    console.log(`Nome não encontrado`)
}else{
    const maius = nomes.map(nome => nome.toUpperCase())
    const posicao = maius.indexOf(pesquisa)
    console.log(`consta na posição ${posicao + 1}`)
}