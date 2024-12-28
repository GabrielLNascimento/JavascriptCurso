/*
imutaveis:
Primitivos -> string, number, boolean, undefined, null (bigint, symbol)
*/

// posso trocar as variaveis quantas vezes eu quiser
let nome = "Gabriel"
nome = 17
nome = true
nome = undefined
nome = null
nome = 'Liz'

console.log(nome)

nome[0] = "Z" // nao vai fazer absolutamente nada -> imutavel
console.log(nome)

let a = "A"
let b = a
console.log(a, b) // isso é apenas uma copia, vão ter o mesmo valor

a = "Outra coisa"
console.log(a, b) // valor de B não é alterado


/*
Mutaveis - Referencia = arrays, objects, functions 
*/
let c = [1, 2, 3]
let d = c
console.log(c, d)

c.push(4)
console.log(c, d) // altera o valor dos dois arrays, são valores por referencia
// c - d são dependentes um do outro
d.pop()
console.log(c, d)


// copiando os valores de referencia
let e = [1, 2, 3]
let f = [...e] // operador spread

e.push(4)
console.log(e, f)