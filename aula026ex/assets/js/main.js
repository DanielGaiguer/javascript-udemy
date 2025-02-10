let form = document.querySelector("#form")

form.addEventListener('submit', function(e) {
    e.preventDefault()
    const inputPeso = e.target.querySelector('input#peso') 
    const inputAltura = e.target.querySelector('input#altura')
    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)

    if (!peso && !altura){
        setResultado('Peso e Altura Inválidos!', false)
        return
    }
    if (!peso) {
        setResultado('Peso Invalido!', false)
        return 
    }
    if (!altura){
        setResultado('Altura Invalida!', false)
        return
    }
    const imc = getImc(peso, altura)
    const nivel = getNivelImc(imc)
    const msg = `Seu IMC é ${imc} (${nivel})`
    setResultado(msg, true)
} )

function getNivelImc(imc){
    let nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau', 'Obesidade grau II ou severa', 'Obesidade grau III ou mórbida']
    /*switch (imc){
        case (imc < 18.5) : 
            grau = nivel[0]
        break
        case (imc < 24.9) : 
            grau = nivel[1]
        break
        case (imc < 29.9):
            grau = nivel[2]
        break
        case (imc < 34.9):
            grau = nivel[3]
        break
        case (imc < 39.9):
            grau = nivel[4]
        break
        case (imc > 40) :
            grau = nivel[5]
        break 
    }
    setResultado(grau)*/
    if (imc < 18.5) return nivel[0]
    if (imc < 24.9) return nivel[1]
    if (imc < 29.9) return nivel[2]
    if (imc < 34.9) return nivel[3]
    if (imc < 39.9) return nivel[4]
    if (imc > 40) return nivel[5]
}
function criaP(){
    let p = document.createElement('p')
    return p 
}

function setResultado(msg, isValid){
    let resultado = document.querySelector("#resultado")
    resultado.innerHTML = ''
    const p = criaP()
    p.innerHTML = msg
    resultado.appendChild(p)
    if (isValid){
       p.classList.add('paragrafo-resultado') 
    } else{
        p.classList.add('bad') 
    }
}

function getImc(peso, altura){
    let imc = peso / altura **2
    return imc.toFixed(2)
}
