const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const nomes = ["Gabriel", "João", "Emilly", "Zanela", "Ugo", "Thaila"]

// quando quero filtrar meu array
const numPar = numeros.filter((n) => n%2 === 0)
const numimpar = numeros.filter((n) => n%2 !== 0)
const nomesPequeno = nomes.filter((n) => n.length <= 5)

console.log(numPar)
console.log(numimpar)
console.log(nomesPequeno)


const pessoas = [
    { nome: "Gabriel", idade: 17 },
    { nome: "Emilly", idade: 19 },
    { nome: "Zanela", idade: 23 },
    { nome: "Tiago", idade: 15 },
    { nome: "Maria", idade: 16 },
    { nome: "Joao", idade: 25 },
]
const maiorIdade = pessoas.filter((pessoa) => pessoa.idade >= 18)
console.log(maiorIdade)