/*
Artiméticos
+ - / *
** potenciacao
% resto
*/

const num1 = 3
const num2 = 2

console.log(num1 + num2)
console.log(num1 - num2)
console.log(num1 * num2)
console.log(num1 / num2)
console.log(num1 ** num2)
console.log(num1 % num2)

console.log((num1 + num2) * num2)

// Operador de incremento

let num3 = 10
num3++
console.log(num3) // 11

console.log(num3++) 
console.log(++num3)


// Atribuição

let num4 = 5

num4 += 10 

console.log(num4)

// exemplos

num4 -= 10 // 5 - 10
num4 *= 10 // 5 * 10
num4 /= 10 // 5 / 10
num4 **= 10 // 5 ** 10


let n1 = 10
let n2 = "5"

console.log(n1 * n2) // 50

n2 = parseFloat("10")
n2 = parseInt("10")
n2 = Number("10")

console.log(typeof n2)