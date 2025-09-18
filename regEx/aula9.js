const { lookahead } = require('./base')

console.log(lookahead)
//console.log(lookahead.match(/.+[^in]active$/gm))

//Positive Lookahead (frases que tem active) - Checa se existe, se existir retorna a expressao regular
//console.log(lookahead.match(/.+(?=[^in]active)/gm))

//Positive Lookahead (frases que tem inactive) - Checa se existe, se existir retorna a expressao regular
//console.log(lookahead.match(/.+(?=\s+inactive)/gm))

//Negative Lookahead (frases que nao tem active) - Checa se nao existe, se nao existir retorna a expressao regular
//console.log(lookahead.match(/^(?!.+[^in]active).+$/gm))

//Negative Lookahead (frases que nao tem active) - Checa se nao existe, se nao existir retorna a expressao regular
//console.log(lookahead.match(/^(?!.+inactive).+$/gm))

//Positive lookbehind (frases que comecam com ONLINE) 
//console.log(lookahead.match(/(?<=ONLINE\s+)\S+.*/gm))

//Negative lookbehind (frases que NAO comecam com ONLINE) 
//console.log(lookahead.match(/^.+(?<!ONLINE.+)$/gm))

const cpf = `
917.882.779-53
000.000.000-00
111.111.111-11
555.555.555-55
094.860.869-23
aaa.bbb.ccc-dd
`

console.log(cpf.match(/^(?!^(\d)\1{2}\.\1{3}\.\1{3}\-\1{2}$)\d{3}\.\d{3}\.\d{3}\-\d{2}$/gm))