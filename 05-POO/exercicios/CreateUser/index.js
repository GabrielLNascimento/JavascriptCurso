const _username = Symbol()
const _password = Symbol()

class User {
    constructor(nome, senha) {
        this[_username] = nome
        this[_password] = senha
    }

    get password() {
        return `Senha é protegida`
    }

    set password(valor) {
        if (!valor) return
        if (typeof valor !== 'string') return
        if (valor.length < 5 || valor.length > 20) return
        this[_password] = valor
    }
}

const p1 = new User("Gabriel", '123456')
console.log(p1.password)
