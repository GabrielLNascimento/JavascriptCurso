// return -> retorna um valor
// e a função termina ali

function soma(a, b) {
    return a + b
    console.log("Nao vou ser mostrado")
}

console.log(soma(1, 2))


// quando temos uma função que retorna, posso atribuir a uma variavel
const valor = soma(10, 3)
console.log(valor)


// função que nao retorna
function soma2(a, b) {
    console.log(a + b)
}
// console.log(soma2(1, 2)) // -> retorna undefined, por que nao retorna nada
soma2(10, 2)


// função que cria um objeto
function criaPessoa(nome, idade) {
    return {nome, idade}
}
const p1 = criaPessoa("Gabriel", 17)
console.log(p1)


// funcao que retorna funcao
function falaFrase(comeco) {
    function falaResto(resto) {
        return `${comeco} -> ${resto}`
    }
    return falaResto
}
const olaMundo = falaFrase("Oi")
const resto = olaMundo("Tudo bem com vc?")
console.log(resto)


// exemplo pratico
function multiplicador(mult) {
    function multiplcar(numero) {
        return mult * numero
    }
    return multiplcar
}
const dobro = multiplicador(2)
const triplo = multiplicador(3)

console.log(dobro(4))
console.log(triplo(5))