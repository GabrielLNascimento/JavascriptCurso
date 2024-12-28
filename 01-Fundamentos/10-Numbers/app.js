let num1 = 1;
let num2 = 2;
let num3 = 10.43212

// somando valores
console.log(num1 + num2)


// converter para string
console.log(num1.toString() + num2.toString())


// usando typeof
console.log(typeof num1, typeof num1.toString())


// casas decimais -> arredondado
console.log(num3.toFixed(2))


// verificar se a variavel é um numero inteiro
console.log(Number.isInteger(num1))


// NaN - not a number, quando algo da errado na hora de um calculo
console.log(10 * "teste")


// verificar se o numero é NaN
console.log(Number.isNaN(10 * "teste"))


// calculando com string
console.log(10 * "5") // 50


// imprecisão
console.log(0.7 * 0.1)
console.log(0.7 + 0.1)

// arrumar imprecisão
let num4 = 0.7 + 0.1
console.log(num4.toFixed(1))


// converter para numero inteiro
let num5 = parseInt("10")
console.log(typeof num5, num5)

// converter para numero float
let num6 = parseFloat("10")
console.log(typeof num6, num6)