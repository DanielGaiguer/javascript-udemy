const rand = (min, max) => Math.floor(Math.random() * (max - min) + min)
const geraMaiscula = () => String.fromCharCode(rand(65, 91))
const geraMinuscula = () => String.fromCharCode(rand(97, 123))
const geraNumero = () => String.fromCharCode(rand(48, 58))
const simbolos = ',.`^[]{}!@#$%*&()_+=-'
const geraSimbolo = () => simbolos[rand(0, simbolos.length)]

function geraSenha(qtd, maisculas, minusculas, numeros, simbolos){
     const senhaArray = []
    qtd = Number(qtd)

    for(let i = 0; 1 < qtd; i++){
        maisculas && senhaArray.push(geraMaiscula())
        if (senhaArray.length === qtd) break
        minusculas && senhaArray.push(geraMinuscula())
        if (senhaArray.length === qtd) break
        numeros && senhaArray.push(geraNumero())
        if (senhaArray.length === qtd) break
        simbolos && senhaArray.push(geraSimbolo())
        if (senhaArray.length === qtd) break
    }
    const senha = String(senhaArray)
    for(let i; qtd < senha.length; i++){
        senha.replace(`,`, ` `)
    }
    //console.log(String(senhaArray).replace(`,`, ` `))
    console.log(senha)
}

geraSenha(10, true, true, true, true )