let a = 'A'; 
let b = 'B'; 
let c = 'C'; 

[a, b, c] = [b, c, a];

console.log(a); 
console.log(b); 
console.log(c); 

// Atribuição via desestruturação
const numeros = [10, 20, 30, 40, 50]
// somente o primeiro e o segundo numero vai ser atribuido
const [num1, num2] = numeros
console.log(num1, num2)


// consigo pegar o resto dos valores dentro do array
const numeros2 = [10, 20, 30, 40, 50]

const [num3, num4, ...resto] = numeros
// utiliza operador "..." para pegar o resto dos valores
// operador spread

console.log(num3, num4)
console.log(resto)


// pulando valores
const numeros3 = [10, 20, 30, 40, 50]
const [um, ,tres, ,cinco] = numeros
console.log(um, tres, cinco)



// lista dentro de listas
const numeros4 = [
    [1, 2, 3], // 0
//   0  1  2

    [4, 5, 6], // 1
//   0  1  2

    [7, 8, 9]  // 2
//   0  1  2
]

// acessando valores dessa lista
console.log(numeros4[1][2]) // 6
console.log(numeros4[2][0]) // 7

// pegando o valor 6 por desestruturação
// pulei o primeiro array
// depois pulei os dois primeiros valores para pegar o 6
const [ , [, , seis]] = numeros4
console.log(seis)
// jeito muito dificil

const [lista1, lista2, lista3] = numeros4
const [quatro1, cinco1, seis1] = lista2
console.log(seis1)