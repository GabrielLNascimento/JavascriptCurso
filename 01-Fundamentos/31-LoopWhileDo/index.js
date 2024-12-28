/*
Estrutura:
while (condicao) { codigo }
condicao tem que dar verdadeira para poder executar o loop
*/

let i = 0

while (i <= 10) {
    console.log(i)

    // cuidado para nao dar loop infinito
    i++
}


// iterando sobre arrays
const numeros = [11, 22, 33, 44, 55]
let c = 0

while (c < numeros.length) {
    console.log(numeros[c])
    c++
}
// nao é mt recomendado, pode usar o loop for

console.log("--------------------")

// gerando um numero de 0 - 50
function gerarNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

let numeroAleatorio = 10

// primeiro executa o codigo, e depois executa a condicao
do {
    console.log(numeroAleatorio)
    numeroAleatorio = gerarNum(0, 50)
} while (numeroAleatorio != 10)

    
// while (numeroAleatorio != 10) {
//     numeroAleatorio = gerarNum(0, 50)
//     console.log(numeroAleatorio)
// }




