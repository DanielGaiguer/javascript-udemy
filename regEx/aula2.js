const { texto } = require(`./base`)

const RegExp1 = /Joao|maria/gi;

console.log(texto)

console.log(texto.match(RegExp1))

console.log(texto.replace(/Joao|Maria/gi, `Felipe`))

console.log(texto.replace(/(Joao|Maria)/gi, '<b?$1</b>'));

console.log(texto.replace(/(Joao|Maria)/gi, function(input) {
    return ' ################ ' + input.toUpperCase() + ' #############';
}))