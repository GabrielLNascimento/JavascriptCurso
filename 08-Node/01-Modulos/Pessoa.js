class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome
        this.sobrenome = sobrenome
    }

    falaOi() {
        return `${this.nome} esta dizendo oi`
    }
}

exports.Pessoa = Pessoa
