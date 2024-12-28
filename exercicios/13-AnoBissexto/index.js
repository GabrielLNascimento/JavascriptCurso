const anoBissexto = (ano) => {
    return (ano%4 == 0 && ano%100 != 0) || (ano%400 == 0) ? true : false
}

console.log(anoBissexto(2000))
console.log(anoBissexto(2004))
console.log(anoBissexto(2008))
console.log(anoBissexto(1800))