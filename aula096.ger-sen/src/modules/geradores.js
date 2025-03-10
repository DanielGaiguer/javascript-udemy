const rand = (min, max) => Math.floor(Math.random() * (max - min) + min)
const geraMaiscula = () => String.fromCharCode(rand(65, 91))
const geraMinuscula = () => String.fromCharCode(rand(97, 123))
const geraNumero = () => String.fromCharCode(rand(48, 58))
const simbolos = ',.`^[]{}!@#$%*&()_+=-'
const geraSimbolo = () => simbolos[rand(0, simbolos.length)]

export default function geraSenha(qtd, maisculas, minusculas, numeros, simbolos){
     const senhaArray = []
    qtd = Number(qtd)

    for(let i = 0; i < qtd; i++){
        maisculas && senhaArray.push(geraMaiscula())
        minusculas && senhaArray.push(geraMinuscula())
        numeros && senhaArray.push(geraNumero())
        simbolos && senhaArray.push(geraSimbolo())
    }
    senhaArray.sort(() => 0.5 - Math.random());
    return String(senhaArray.join(``).slice(0, qtd))
}





