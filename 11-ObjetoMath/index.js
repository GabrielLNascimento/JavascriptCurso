let num1 = 9.3;


// Arredondar para baixo
console.log(Math.floor(num1)) // 9


// Arredondar para cima
console.log(Math.ceil(num1)) // 10


// Arredonda para o mais próximo
console.log(Math.round(num1)) // 9


// Encontrar o número maior
console.log(Math.max(1, 2, 3, 4, 55, 45, 87, 12))


// Encontrar o número menor
console.log(Math.min(1, 2, 3, 4, 55, 45, 87, 12))


// gerar numeros aleatorios
console.log(Math.random()) // entre 0 e 1


// variavel com numero aleatorio entre 0 a 10
const aleatorio = Math.random() * 10
console.log(aleatorio)


// tirando as casas decimais
const aleatorio2 = Math.round(Math.random() * 10)
console.log(aleatorio2)


// Potenciação
console.log(Math.pow(2, 3)) // 2 elevado a 3
console.log(2 ** 3)


// raiz quadrada
console.log(Math.sqrt(81)) // 9
console.log(81 ** (1/2)) // 9


// resultado: infinity
console.log(100 / 0)


