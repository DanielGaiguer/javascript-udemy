import validator from 'validator'

export default class Contato {
    constructor(formClass) {
        this.form = document.querySelector(formClass)
        this.res = document.querySelector(`.res`)
    }

    init(){ 
        this.events()
    }

    events() {

        if (!this.form) return
        this.form.addEventListener(`submit`, e => { 
            e.preventDefault()
            this.res.innerHTML = ``
            
            this.validate(e)
        })
    }

    validate(e){
        const el = e.target
        const nameInput = el.querySelector(`input[name="nome"]`)
        const emailInput = el.querySelector(`input[name="email"]`)
        const teleInput = el.querySelector(`input[name="telefone"]`)
        let error = false 
        
        if (!nameInput.value) {
            this.message(`Nome é um campo obrigatório`)
            error = true
        }

        if (emailInput.value){
            if (!validator.isEmail(emailInput.value)){
                this.message('Email Inválido.')
                error = true
            }
        }

        if (!emailInput.value && !teleInput.value){
            this.message(`Pelo menos um contato precisa ser adicionado: E-mail ou Telefone.`)
            error = true
        }

        if (!error) el.submit()
    }

    message(msg){
        const newP = document.createElement("p")
        newP.innerHTML = msg
        this.res.classList.add(`alert`)
        this.res.classList.add(`alert-danger`)
        this.res.appendChild(newP)
    }
}