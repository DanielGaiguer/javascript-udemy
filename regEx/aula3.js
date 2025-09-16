const { texto, arquivos } = require(`./base`)

// * (opcionais) 0 ou n {0,}
// + (obrigatorio) 1 ou n (1,)
// ? (opcionais) 0 ou 1 {0, 1}\
// \ Caractere de escape
// {n,m} minimo e maximo
// {10,} minimo 10
// {,10} de 0 a 10
// {5, 10} de 5 a 10
// {10} especificamente 10

//console.log(texto)
//const regExp1 = /Jo+ao+/gi
//console.log(texto.match(regExp1))

//const regExp2 = /\.(jpe?g)/gi
const regExp2 = /\.((jp|JP)(e|E)?(g|G))/gi

for (const arquivo of arquivos) {
    const valido = arquivo.match(regExp2)

   //if (!valido) continue

    console.log(arquivo, valido)
}