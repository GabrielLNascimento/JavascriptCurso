const ReverterString = (string) => {
    return string.split("").reverse().join("")
}

console.log(ReverterString("Gabriel"))
// passo a passo
// 1 -> split(""): corto a string dentro de um array cada caracter
// 2 -> reverse(): inverto o array
// 3 -> join(""): junto cada caracter do array