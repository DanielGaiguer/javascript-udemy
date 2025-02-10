class ValidaFormulario {
      constructor(){
        this.formulario = document.querySelector(`.formulario`)
        this.eventos()
      }
    
      eventos(){
        this.formulario.addEventListener(`submit`, e => {
            this.handleSubmit(e)
        })
      }

      handleSubmit(e){
        e.preventDefault()
        const camposValidos = this.camposSaoValidos()
        const senhasValidas = this.senhasSaoValidas()

        if (camposValidos && senhasValidas){
          alert(`Formulario Enviado`)
          this.formulario.submit()
        }
      }

      senhasSaoValidas(){
        let valid = true
        const senha = this.formulario.querySelector(`.senha`)
        const repSenha = this.formulario.querySelector(`.repSenha`)

        if(senha.value !== repSenha.value){
          valid = false
          this.criaErro(senha, `*Campos "Senha" e "Repetir senha" precisam ser iguais.`)
          this.criaErro(repSenha, `*Campos "Senha" e "Repetir senha" precisam ser iguais.`)
        }
        
        if (senha.value.length < 6 || senha.value.length > 12){
          valid = false
          this.criaErro(senha, `*A senha deve conter de 6 a 12 caracteres.`)
        }
        return valid
      }

      camposSaoValidos (){
        let valid = true
        
        for(let errorText of this.formulario.querySelectorAll(`.erro`)){
            errorText.remove()
        }
        for(let campo of this.formulario.querySelectorAll(`.validar`)){
            if(!campo.value){
                const label = campo.previousElementSibling.innerText
                this.criaErro(campo, `*Campo "${label}" nao pode estar em branco.`)
                valid = false
            }

            if(campo.classList.contains(`cpf`)) {
                if(!this.validaCPF(campo)) valid = false
            }

            if(campo.classList.contains(`usuario`)){
              if(!this.validaUsuario(campo)) valid = false 
            }

        }
      }

      validaUsuario(campo){
        const usuario = campo.value
        let valid = true

        if(usuario.length < 3 || usuario.length > 12){
          this.criaErro(campo, `*Usuario deve ter entre 3 a 12 caracteres.`)
          valid = false
        }

        if(!usuario.match(/^[a-zA-Z0-9]+$/g)){
          this.criaErro(campo, `*Usuario deve conter apenas letras e/ou numeros`)
          valid = false
        }

        return valid
      }

      validaCPF(campo){
        
        const cpf = new ValidaCpf(campo.value)

        if(!cpf.valida()){
            this.criaErro(campo, `*CPF invalido.`)
            return false
        }
        return true
      }

      criaErro(campo, msg){
        const div = document.createElement(`div`)
        div.innerHTML = msg
        div.classList.add(`erro`)
        campo.insertAdjacentElement(`afterend`, div)
      }
}

const valida = new ValidaFormulario()