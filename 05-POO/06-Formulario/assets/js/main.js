class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector(".formulario")
        this.eventos()
    }

    eventos() {
        this.formulario.addEventListener("submit", e => {
            this.handleSubmit(e)
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        // console.log("Formulario enviado")
        const camposValidos = this.fieldValid()
        const senhasValidas = this.PassValid() 

        console.log(camposValidos, senhasValidas)

        if (camposValidos && senhasValidas) {
            alert("Formulario enviado")
            this.formulario.submit()
        }
    }

    fieldValid() {
        let valid = true 

        for (let errorText of this.formulario.querySelectorAll(".error-text")) {
            errorText.remove()
        }

        for (let campo of this.formulario.querySelectorAll(".validar")) {
            let label = campo.previousElementSibling.textContent
            
            if(!campo.value) {
                this.createError(campo, `Campo ${label} nao pode estar em branco`)
                valid = false
            }

            if (campo.classList.contains("cpf")) {
                if(!this.validaCPF(campo)) valid = false
            }

            if (campo.classList.contains("usuario")) {
                if(!this.validaUsuario(campo)) valid = false
            }
        }

        return valid
    }

    PassValid() {
        const senha = document.querySelector(".senha")
        const RepeteSenha = document.querySelector(".repetir-senha")

        let valid = true

        if(senha.value !== RepeteSenha.value) {
            this.createError(senha, `As senhas devem ser iguais`)
            this.createError(RepeteSenha, `As senhas devem ser iguais`)
            valid = false
        }
        console.log(senha.value)
        if (senha.value.length < 3 || senha.value.length > 15) {
            this.createError(senha, `Senha deve conter de 3 a 15 caracteres`)
            valid = false
        }

        return valid
    }

    createError(campo, msg) {
        const div = document.createElement('div')
        div.innerHTML = msg;
        div.classList.add("error-text")
        campo.insertAdjacentElement('afterend', div)
    }

    validaCPF(campo) {
        const cpf = new ValidaCPF(campo.value)
        
        if(!cpf.Valida()) {
            this.createError(campo, "CPF inválido")
            return false
        }

        return true
    }

    validaUsuario(campo) {
        const usuario = campo.value
        let valid = true
        
        if(usuario.length > 20 || usuario.length < 3) {
            this.createError(campo, "Usuario precisa ter entre 3 a 20 caracteres")
            valid = false
        }

        if(!usuario.match(/[a-zA-Z0-9]+/g)) {
            this.createError(campo, "Usuario precisa conter apenas letras e/ou numeros")
            valid = false
        }
        
        return valid
    }

}

const valida = new ValidaFormulario()