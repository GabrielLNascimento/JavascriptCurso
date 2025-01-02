const pessoas = [
    { id: 1, nome: "Gabriel" },
    { id: 2, nome: "Emilly" },
    { id: 3, nome: "Zanela" },
]

// quero pegar o id e jogar como chave do objeto
// const novasPessoas = {}

// // usando destructuring
// for (let {id, nome} of pessoas) {
//     novasPessoas[id] = { id, nome }
//     // console.log(id, nome)
// }

// console.log(novasPessoas)

// 2 problemas
// 1- converter os id para number
// 2- ordem que está disposta no objeto final

// jeito correto de fazer
const novasPessoas = new Map()
for (let {id, nome} of pessoas) {
    // metodo set(chave, valor)
    novasPessoas.set(id, {id, nome})
}
console.log(novasPessoas)

// pegar uma chave do objeto
console.log(novasPessoas.get(2))


// iterar sobre o objeto
for (let [identifier, {id, nome}] of novasPessoas) {
    // retorna um array
    console.log(identifier, "->", id, nome)
}

// quero pegar apenas as chaves
for (let chave of novasPessoas.keys()) {
    console.log(chave)
}

// quero pegar apenas os valores
for (let valor of novasPessoas.values()) {
    console.log(valor)
}

// eliminar a chave do obj
novasPessoas.delete(2)
console.log(novasPessoas)