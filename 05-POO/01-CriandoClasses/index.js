// metodo constructor -> sempre executa quando iniciar a classe
class Pessoa {
    constructor(nome, sobrenome) {
        // setando valores
        this.nome = nome
        this.sobrenome = sobrenome
    }

    // automaticamente vem para o prototype do objeto
    // é melhor por que nao tem complexidade
    falar() {
        console.log(`${this.nome} está falando`)
    }
}

const p1 = new Pessoa("Gabriel", "Liz")
const p2 = new Pessoa("Emilly", "Pedrozo")
console.log(p1)
console.log(p2)


// comparando com a função construtora
function Pessoa2(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
}
Pessoa2.prototype.falar = function() {
    console.log(`${this.nome} está falando`)
}
const p3 = new Pessoa2("João", "Augusto")
console.log(p3)