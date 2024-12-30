// objetos -> chave: valor

// declarando objeto com "new"
const p1 = new Object()
p1.nome = 'Gabriel'
p1.sobrenome = 'Liz'
p1.idade = 17

// tem que ser uma função anonima 
p1.falarNome = function() {
    console.log(`${this.nome} está falando`)
}
p1.falarNome()

p1.getDataNascimento = function() {
    const dataAtual = new Date()
    return dataAtual.getFullYear() - this.idade
}
console.log(p1.getDataNascimento())

console.log("----------------------------")

console.log(p1)

console.log("----------------------------")
const pessoa = {
    nome: "Gabriel",
    sobrenome: "Liz"
}

console.log(pessoa.nome, pessoa.sobrenome)

// posso inserir valores dentro do colchetes
// como valores vindo do usuario
console.log(pessoa['nome'], pessoa['sobrenome'])

const chave = 'nome'
console.log(pessoa[chave])

console.log("----------------------------")

// apagar chaves
delete pessoa.nome
console.log(pessoa)

console.log("----------------------------")

for (let chave in p1) {
    console.log(chave, p1[chave])
}