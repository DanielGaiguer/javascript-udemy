const nome = "Daniel"
const sobrenome = "Gaiguer"
const idade = 16
const peso = 62
const altura = 1.68
let IMC = peso / altura**2
let anoAtual = new Date()
let anoNascimento = anoAtual.getFullYear() - idade 
console.log (`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} tem ${altura} de altura e seu IMC é ${IMC}, nascido em ${anoNascimento} `)
