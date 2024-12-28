// estrutura
// function <nome>(parametros) { codigo }

function Welcome() {
    console.log("Bem vindo")
}
// preciso chamar a função
Welcome()



// Enviando dados como paramentros
function Saudacao(nome) {
    console.log(`Bom dia ${nome}`)
}
// passando o valor para o parametro nome
Saudacao("Gabriel")
Saudacao("João")

const variavel = Saudacao("Emilly")
console.log(variavel)
// retorna undefined por que nao retorna nada
// mas ela é executada

// função que retorna algo
function BemVindo(nome) {
    console.log(`Bom dia ${nome}`)
    return 123
}
const variavel2 = BemVindo("José")
console.log(variavel2)


// função retornando a mensagem
function BemVindo2(nome) {
    return `Bom dia ${nome}`
}
const variavel3 = BemVindo2("Zanela")
console.log(variavel3)
// jeito mais apropriado



// função que calcula a soma de dois numeros
function soma(a, b) {
    return a + b
}
console.log(soma(10, 3)) // vou mostrar na tela oq a função retornar


// corpo de função é protegido
function Dobro(num) {
    const dobro = num * 2
    return dobro
}
console.log(Dobro(7))
// console.log(dobro) -> nao está acessivel


// funcao sem parametro
console.log(soma()) // NaN -> houve um problema no calculo


// passando valores padrão no parametro
function soma2(n1 = 1, n2 = 1) {
    return n1 + n2
}
console.log(soma2()) // 2
console.log(soma2(3)) // 4



// funcao anonima
const Elevado3 = function (num) {
    return num ** 3
}
console.log(Elevado3(2))


// arrow function
const raiz = (num) => {
    return num ** (0.5)
}
console.log(raiz(81))