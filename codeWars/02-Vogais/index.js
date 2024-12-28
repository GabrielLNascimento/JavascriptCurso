/*
Retorne o número (contagem) de vogais na string dada.

Vamos considerar a e i o u como vogais para este Kata (mas não y).

A string de entrada consistirá apenas em letras minúsculas e/ou espaços
*/

function getCount(text) {
    const txtFormat = text.toLowerCase();
    let result = 0
    for (let i of txtFormat) {
        result += (
            i === 'a' ||
            i === "e" ||
            i === "i" ||
            i === "o" ||
            i === "u" ? 1 : 0
        )
    }

    return result
}

console.log(getCount("Gabriel"))



function getCount2(txt) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u'])
    const txtFormat = txt.toLowerCase()

    let result = 0

    for (let char of txtFormat) {
        if (vowels.has(char)) result++
    }

    return result
}

console.log(getCount2("Gabriel"))

function getCount3(str) {
    return (str.match(/[aeiou]/ig)||[]).length;
}

console.log(getCount3("Gabriel"))