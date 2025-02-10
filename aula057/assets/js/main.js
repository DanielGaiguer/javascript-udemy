/*function getCalculator(){
    return{
        display: document.querySelector(".display"),
        
        inicia() {
            this.clickbutton()
            //this.clearDisplay()
            this.enter()
        },

        clearDisplay(){
            this.display.value = ''
        },

        delOne(){
            this.display.value = this.display.value.slice(0, -1)
        },

        equal() {
            let conta = this.display.value

            try{
                conta = Number(eval(conta))

                if(!conta) {
                    alert('conta invalida')
                    return
                }

                this.display.value = String(conta)
            }catch(e){
                alert ('erro')
                return
            }
        },

        enter(){
            document.addEventListener('keyup', e => {
                if(e.keyCode === 13 ){
                    this.equal()
                    return
                }
            })
        },

        clickbutton(){
            document.addEventListener('click', (e) =>{
                const el = e.target

                if (el.classList.contains('btn-num')){
                    this.btnForDisplay(el.innerText)
                }

                if (el.classList.contains('btn-clear')){
                    this.clearDisplay()
                }

                if (el.classList.contains('btn-del')){
                    this.delOne()
                }

                if(el.classList.contains('btn-eq')){
                    this.equal()
                }
            })
        },

        btnForDisplay(valor){
            this.display.value += valor
            this.display.focus()
        }
    }
}

const calculator = getCalculator()
calculator.inicia()
*/

function Calculadora() {
    this.display = document.querySelector(".display")

    this.inicia = () => {
        this.clickButton()
        this.enter()
    }

    this.clearDisplay = () => {
        this.display.value = ''
    }

    this.enter = () => {
            document.addEventListener('keyup', e => {
            if(e.keyCode === 13 ){
                this.equal()
                return
            }
        })
    }

    this.delOne = () => {
        this.display.value = this.display.value.slice(0, -1)
    }

    this.equal = () => {
        let conta = this.display.value

        try{
            conta = Number(eval(conta))

            if(!conta) {
                alert('conta invalida')
                return
            }

            this.display.value = String(conta)
        }catch(e){
            alert ('erro')
            return
        }
    }

    this.clickButton = () => {
        document.addEventListener('click', (e) =>{
            const el = e.target

            if (el.classList.contains('btn-num')){
                this.btnForDisplay(el.innerText)
            }

            if (el.classList.contains('btn-clear')){
                this.clearDisplay()
            }

            if (el.classList.contains('btn-del')){
                this.delOne()
            }

            if(el.classList.contains('btn-eq')){
                this.equal()
            }
        })
    }

    this.btnForDisplay = (valor) => {
        this.display.value += valor
        this.display.focus()
    }

}
const calculadora = new Calculadora()
calculadora.inicia()