class ValidaCpf{
    constructor(cpfEnviado){
        Object.defineProperty(this, `cpfLimpo`, {
            enumerable: true,
            configurable: false,
            writable: false,
            value: cpfEnviado.replace(/\D+/g, ``)
        })
    }

    valida(){
        if (!this.cpfLimpo) return false
        if (this.cpfLimpo.length !== 11) return false
        if (this.isSequencia()) return false
        //return `teste2`
        const cpfParcial = this.cpfLimpo.slice(0, -2)
        const digito1 = this.criaDigito(cpfParcial)
        const digito2 = this.criaDigito(cpfParcial + digito1)
            
        const novoCpf = cpfParcial + digito1 + digito2
        return novoCpf === this.cpfLimpo
    }

    isSequencia(){
        const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length)
        return sequencia === this.cpfLimpo
    }

    criaDigito(cpfParcial){
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
}

//const cpf1 = new ValidaCpf(`094-860-869-23`)//070-987-720-03
//console.log(cpf1.valida())