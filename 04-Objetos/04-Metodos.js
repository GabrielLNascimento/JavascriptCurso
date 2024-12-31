console.log("Apontam para o mesmo lugar")
const produto = { nome: "Caneca", preco: 12 }

Object.defineProperty(produto, 'nome', {
    configurable: true
})

const outroProduto = produto

// vai alterar nos dois
produto.nome = "Mesa"
outroProduto.preco = 15

console.log(produto)
console.log(outroProduto)

console.log("----------------------------")
console.log("Copiando objetos")
// como copiar o objeto para outro, apenas copiar
// const copiaProduto = {...produto}

const copiaProduto = {
    ...produto,
    material: "Porcelana"
}

copiaProduto.nome = "geladeira"
produto.preco = 20

console.log(produto)
console.log(copiaProduto)


console.log("----------------------------")
console.log("Objeto assign")

// const caneca = Object.assign({}, produto) -> copiando objetos
const caneca = Object.assign({}, produto, { material: "porcelana"})
console.log(produto)
console.log(caneca)


console.log("----------------------------")

// passando apenas as propriedades
// jeito mais manual

const produto2 = { nome: produto.nome, preco: produto.preco }
console.log(produto2)
console.log(produto)


console.log("----------------------------")
console.log("Chaves do objeto 'produto'")

console.log(Object.keys(produto))


console.log("----------------------------")
console.log("Congelando o objeto 'produto'")
Object.freeze(produto)

produto.nome = "AAAAA"
console.log(produto)


console.log("----------------------------")
console.log("Pegar as configurações de uma propriedade do objeto")
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'))

// Object.defineProperty(produto, 'nome', {
//     value: "Escada",
//     writable: true
// })

// console.log(Object.getOwnPropertyDescriptor(produto, 'nome'))


console.log("----------------------------")
console.log("Valores")

console.log(Object.values(produto))


console.log("----------------------------")
console.log("Valores e chaves")

// for (let item of Object.entries(produto)) {
//     console.log(item)
// }

// usando destructuring
for (let [chave, valor] of Object.entries(produto)) {
    console.log(`${chave}: ${valor}`)
}