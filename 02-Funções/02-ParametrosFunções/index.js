// parametros
// o que era pra ser considerado um erro
function falarOi() {
    console.log("oi")
}
// passando parametros
falarOi("valor")
// era pra retornar erro, mas o js ignora


// acessando os argumentos
function soma() {
    let total = 0
    for (let num of arguments) {
        total += num
    }
    console.log(total)
}
soma(1, 2, 3)

// posso acessar por indice
// arguments[2] -> 30
// teste(10, 20, 30)


// posso passar parametros tambem
// arguments vai sustentar todos os argumentos pasados
function soma1(a, b, c) {
    let total = 0
    for (let num of arguments) {
        total += num
    }
    console.log(total, a, b, c)
}
soma1(1, 2, 3, 4, 5, 6)



// passando menos argumentos, e muitos parametros
// o js seta um valor undefined para o parametro que eu nao passei argumento
function mostrar(a, b, c, d, e, f) {
    console.log(a, b, c, d, e, f)
}
mostrar(1, 2, 3)


// atribuindo valor padrao no parametro
function soma2(a = 0, b = 0) {
    
    // jeito antigo de fazer
    // b = b || 0
    // se tiver o valor de B, ele atribui o proprio valor b
    // se nao tiver, ele atribui o valor zero

    console.log(a + b)
    console.log(a, b)
}
soma2(1) // vai retornar NaN, se nao tiver B
// parametro B está sendo atribuido o valor de undefined

// para pular um parametro, e apenas colocar valor no parametro b
// temos que escrever undefined no parametro
soma2(undefined, 10)


// atribuição via desestruturação
function mostrarPessoa({ nome, idade }) {
    console.log(nome, idade)
}
// tirando as chaves nome e idade do objeto e passando para o parametro
mostrarPessoa({ nome: "Gabriel", idade: 17 })


// utilizando arrays
function mostrarValores([v1, v2, v3]) {
    console.log(v1, v2, v3)
}
mostrarValores(['Gabriel', 'Liz', 10, 20])


// operador rest -> vai receber o resto dos argumentos passados
function conta(operador, acumulador, ...numeros) {
    for (let num of numeros) {
        if (operador === '+') acumulador += num
        if (operador === '-') acumulador -= num
        if (operador === '*') acumulador *= num
        if (operador === '/') acumulador /= num
    }
    console.log(acumulador)
    console.log(arguments)
}

conta("*", 1, 11, 22, 33, 44, 55)
