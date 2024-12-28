/*
Se listarmos todos os números naturais abaixo de 10 que são múltiplos de 3 ou 5, obtemos 3, 5, 6 e 9. A soma desses múltiplos é 23.

Termine a solução para que ela retorne a soma de todos os múltiplos de 3 ou 5 abaixo o número passou.

Além disso, se o número for negativo, retorne 0.

Nota: Se o número for um múltiplo de ambos 3 E 5, conte apenas uma vez.
*/

function solution(number) {
    if (number < 0) return 0
    let soma = 0;

    for (let i = 0; i < number; i++) {
        soma += i%3 == 0 ? i : i%5 == 0 ? i : 0
    }

    return soma
}

console.log(solution(10))