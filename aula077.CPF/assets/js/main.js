function ValidaCpf(cpfEnviado){
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function(){
            return  cpfEnviado.replace(/\D+/g, ``)//Filtro de caracteres nao-numeraveis
        }
    })
}

ValidaCpf.prototype.valida = function(){
    if (typeof this.cpfLimpo === 'undefined') return false
    if (this.cpfLimpo.length !== 11) return false
    if (this.isSequencia()) return false

    const cpfParcial = this.cpfLimpo.slice(0, -2)
    const digito1 = this.criaDigito(cpfParcial)
    const digito2 = this.criaDigito(cpfParcial + digito1)
        
    const novoCpf = cpfParcial + digito1 + digito2
    return novoCpf === this.cpfLimpo
}


ValidaCpf.prototype.criaDigito = function(cpfParcial){
    const cpfArray = Array.from(cpfParcial)
    let regressivo = cpfArray.length + 1
    const total = cpfArray.reduce((ac, val) => {
        ac += (regressivo * Number(val))
        regressivo --
        return ac
    }, 0)

    const digito = 11 - (total % 11)
    return digito > 9 ? '0' : String(digito)

    
}
     
ValidaCpf.prototype.isSequencia = function(){
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length)
    return sequencia === this.cpfLimpo
}

 
const cpf = new ValidaCpf(`705.484.450-52`)
//console.log(cpf.valida())

if (cpf.valida()) {
    console.log('CPF valido')
}else{
    console.log('CPF invalido')
}



//let totalDig10 = 0
//let totalDig11 = 0 

/*
const somaCpf10 = cpfArray.reduce((ac, valor, index) => {
    if (index >= 9 ) return
    let multiplicador = 10
    let contador = 1
    ac += valor * multiplicador
    if (index === contador) {
        multiplicador --
        contador ++ 
    }
    //console.log(index, valor)
    //console.log(multiplicador)
    //console.log(ac)
    
    totalDig10 = ac
    //console.log(totalDig10)
    return ac
}, 0)

function atribuiDig10() {
    digito10 = 11 - (totalDig10 % 11)
    if (digito10 > 9) digito10 = 0
    if (digito10 !== cpfLimpo[10]) return window.alert('cpfInvalido')
}
*/
//console.log(digito10)
/*
const somaCpf11 = cpfArray.reduce((ac, valor, index) => {
    if (index == 10) return
    //console.log(index, valor)
    //console.log('TESTE')
    //console.log(index)
    let multiplicador = 11
    let contador = 1
    ac += Number(valor) * multiplicador
    if (index === contador) {
        multiplicador --
        contador ++ 
    }
    console.log(valor, index)
    //console.log(multiplicador)
    console.log(ac)
    console.log(462 % 11)
    totalDig11 = ac
    return ac
}, 0)

function atribuiDig11() {
    digito11 = 11 - (totalDig11 % 11)
    if (digito11 > 9) digito11 = 0
    if (digito11 !== cpfLimpo[11]) return window.alert('cpfInvalido')
    
}
    */