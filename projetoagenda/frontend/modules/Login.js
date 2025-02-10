import validator from 'validator'

export default class Login {
    constructor(formClass){
        this.form = document.querySelector(formClass)
        this.res = document.querySelector(`.res`)
    }

    init(){ 
        this.events()
    }
    
    events() {
        if (!this.form) return
        this.form.addEventListener('submit', e => {
            e.preventDefault()
            this.res.innerHTML = ``
            this.validate(e)
        })
    }

    validate(e) {
        const el = e.target
        const emailInput = el.querySelector(`input[name="email"]`)
        const passwordInput = el.querySelector(`input[name="password"]`)
        let error = false

        if (!validator.isEmail(emailInput.value)) {
            error = true  
            this.message('Email Inválido.') 
        }
        if (passwordInput.value.length < 3 || passwordInput.value.length > 50 ) {
            error = true
            this.message('Senha Inválida.')
        }    
        
        if (!error) el.submit()
    }

    message(msg) {
        const newP = document.createElement("p")
        newP.innerHTML = msg
        this.res.classList.add(`alert`)
        this.res.classList.add(`alert-danger`)
        this.res.appendChild(newP)
    }
}