const { alfabeto } = require('./base')

// [abc] -> Connjunto [^] -> Negacao
// [0-9] 
// [min-max] -> Range, com minimo e maximo
// [^min-max] -> tudo menos isso

console.log(alfabeto)
console.log(alfabeto.match(/[0-9]+/g))
console.log(alfabeto.match(/[a-k]+/g))
console.log(alfabeto.match(/[A-Z]+/g))
console.log(alfabeto.match(/[a-zA-Z0-9]+/g))
console.log(alfabeto.match(/[^a-zA-Z0-9]+/g)) //Negacao
console.log(alfabeto.match(/[\u00A0-\u00BA]+/g)) //Unicode, tambem pode incluir letras acentuadas
//Atalhos:
console.log(alfabeto.match(/\w+/g))// Qualquer caractere alfanumerico, nao inclui acentos
console.log(alfabeto.match(/\W+/g))// Encontra tudo que nao e alfanumerico, W em maisculo
console.log(alfabeto.match(/\d+/g))// Qualquer digito numerico
console.log(alfabeto.match(/\D+/g))// Tudo que nao e digito
console.log(alfabeto.match(/\s+/g))// Vai pegar qualquer tipo de espaco em branco, com varios inclusos
console.log(alfabeto.match(/\S+/g))// Vai pegar tudo que nao e um espaco, e vai separar em conjuntos
