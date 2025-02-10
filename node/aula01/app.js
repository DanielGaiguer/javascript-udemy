/*
const mod1 = require(`./mod1`)
//console.log(mod1.falaNome())

//const falaNome = require(`./mod1`).falaNome //ou const falaNome = mod1.falaNome
//console.log(falaNome())
 

//Via desestruturacao= 

const { nome, sobrenome, falaNome} = require('./mod1')
console.log(nome, sobrenome)
console.log(falaNome())
*/

//Com class=

const path = require('path')
const { Pessoa } = require('./mod1')

const p1 = new Pessoa(`Luiz`)
console.log(path)