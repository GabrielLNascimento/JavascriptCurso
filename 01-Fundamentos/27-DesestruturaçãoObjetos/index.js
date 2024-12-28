const pessoa = {
    nome: "Gabriel",
    sobrenome: "Liz",
    idade: 17,
    peso: 63.7,
    altura: 1.90,
    endereco: {
        rua: "Caçadores",
        num: 3250,
        bairro: "velha"
    }
}   

// acessando valores pelo '.'
console.log(pessoa.nome)

// jogando na variavel
const nome1 = pessoa.nome
console.log(nome1)

// atribuição por desestruturação
// o nome aqui da chave é o mesmo do objeto pessoa
const { nome } = pessoa
console.log(nome)

// pegando mais de um valor
const { idade, sobrenome } = pessoa
console.log(idade, sobrenome)


// caso o valor nao exista, atribuimos um valor padrão
const { profissao = "Sem profissao" } = pessoa
console.log(profissao)


// posso modificar o nome da variavel
const { peso: meuPeso } = pessoa
// a chave 'peso' passa a ser chamada de "meuPeso"
console.log(meuPeso)


// passando valor padrao e trocando o nome
const { vivo: EstaVivo = false } = pessoa
console.log(EstaVivo)


// pegando valores dentro de endereco
const { endereco } = pessoa
console.log(endereco)

// pegando valores dentro do objeto endereco
const { endereco: { rua, num } } = pessoa
console.log(rua, num)
// nao possuo mais a variavel endereco


// atribuindo valores nos parametros do endereco
const { endereco: {rua: r, num: n} } = pessoa
console.log(r, n)


// utilziando o operador rest
const {nome: meuNome, ...resto} = pessoa
console.log(meuNome) 
console.log(resto) 