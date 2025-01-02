const senha = {
    senha() {
        return this.senha
    }
}

const nome = {
    nome() {
        return this.nome
    }
}

const UserPrototype = Object.assign({}, nome, senha)

function CreateUser(nome, senha) {
    return Object.create(UserPrototype, {
        nome: {
            enumerable: true,
            value: nome
        },
        senha: {
            enumerable: true,
            value: senha
        }
    })
}

const p1 = new CreateUser("Gabriel", 123)
console.log(p1)