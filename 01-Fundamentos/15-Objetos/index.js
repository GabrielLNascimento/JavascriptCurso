// objetos são conjunto de chaves e valores
// posso colocar qualquer tipo de valor
// até mesmo funções

const pessoa = {
    //chave: valor
    nome: "Gabriel",
    idade: 17,
}

console.log(pessoa)

// acessando atributos
console.log(pessoa.nome, pessoa.idade)


// função que cria um objeto pra mim
function criaPessoa(nome, idade) {
    return { nome, idade }
}
const pessoa1 = criaPessoa("Gabriel", 17)
const pessoa2 = criaPessoa("Emilly", 18)
const pessoa3 = criaPessoa("Zanela", 16)

console.log(pessoa1)
console.log(pessoa2)
console.log(pessoa3)


// objetos com funções
const pessoa4 = {
    nome: "Gabriel",
    idade: 17,
    fala() {
        console.log(`${this.nome} tem ${this.idade} anos`)
    },
    incrementarIdade() {
        this.idade += 1
    }
}
// chamando a função
pessoa4.incrementarIdade()
pessoa4.fala()
