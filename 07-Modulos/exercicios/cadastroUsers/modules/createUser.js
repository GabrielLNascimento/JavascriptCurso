export default class User {
    constructor(name, password, email) {
        this.name = name;
        this.password = password;
        this.email = email;
        this.erros = []
    }

    valida() {
        if (!this.name || !this.password || !this.email) {
            this.erros.push('Preencha todos os campos');
        }

        if(this.password.length < 3 || this.password.length > 20) {
            this.erros.push('A senha deve ter entre 3 e 20 caracteres');
        }

        if(this.email.indexOf('@') === -1 || this.email.indexOf('.') === -1) {
            this.erros.push('Email inválido');
        }
    }
}
