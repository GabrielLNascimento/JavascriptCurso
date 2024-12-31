// nesta forma de criar uma Pessoa nova, temos sempre o mesmo metodo que se repete ao longo dos objetos criados -> problema de perfomance
// eu poderia pegar esse metodo, jogar pra fora do objeto, e todos os objetos tiver "conectados" a esse metodo?

// prototipo -> termo usado para se referir ao que foi criado pela primeira vez. servindo de molde para futuras produções

// todos os objetos tem uma referencia interna (__proto__) -> propriedade prototype

function Pessoa(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
    // this.nomeCompleto = () => `ORIGINAL: ${this.nome} ${this.sobrenome}`
    // sobrescreve
}
const p1 = new Pessoa("Gabriel", "Liz") // <- função construtora
const p2 = new Pessoa("Emilly", "Pedrozo")
const data = new Date() // <- função construtora

console.dir(p1)
console.dir(p2)
console.dir(data)

// Pessoa.prototype === p1.__proto__ -> True

// acessando o prototype que é um objeto
console.log(Pessoa.prototype) // nao temos nada pq eu n defini nada

// definindo um metodo dentro do prototype da Pessoa
Pessoa.prototype.falarOi = "Oiii"
Pessoa.prototype.nomeCompleto = function() {
    return `${this.nome} ${this.sobrenome}`
}