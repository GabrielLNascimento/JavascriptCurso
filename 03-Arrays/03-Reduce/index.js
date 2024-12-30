const numeros = [10, 20, 32, 12, 42, 21, 54]
const total = numeros.reduce((acum, valor, indice, arr) => {
    
    acum += valor
    console.log(acum, valor)
    
    return acum
}, 0)
console.log(total)

console.log("-------------")

const pessoas = [
    { nome: "Gabriel", idade: 17 },
    { nome: "Emilly", idade: 19 },
    { nome: "Zanela", idade: 23 },
    { nome: "Tiago", idade: 15 },
    { nome: "Maria", idade: 16 },
    { nome: "Joao", idade: 25 },
]
const maisVelha = pessoas.reduce((acum, valor) => {
    if (acum.idade > valor.idade) return acum
    return valor
})
console.log(maisVelha)


console.log("-------------")

const num = [1, 2, 3, 4, 5]
const dobro = num.reduce((acum, valor) => {
    acum *= valor
    return acum
}, 1)
console.log(dobro)


function media(arr) {
    const somaTotal = arr.reduce((acum, valor) => {
        acum += valor
        return acum
    }, 0)
    return somaTotal / arr.length
}
console.log(media(num))