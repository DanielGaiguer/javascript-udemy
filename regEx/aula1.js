// g - global(encontra todas as ocorrencias)
// i - insensitive (nao checa letras maisculasas)

const { texto } = require(`./base`)

const RegExp1 = /a professora perguntou/i;

console.log(RegExp1.test(texto))