const { cpfs2 } = require('./base')

// ^ - comeca com
//$ - termina com
// [^] - Negacao
// m - multiline

const cpf = `917.882.779-53`

const cpfRegExp = /^(\d{3}\.){2}\d{3}-\d{2}$/gm

console.log(cpfs2.match(cpfRegExp))