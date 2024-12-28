const numeros = [11, 22, 33, 44, 55, 66]

// mostra os indices
for (let num in numeros) {
    console.log(num)
}

console.log("---------")

// mostra os elementos
for (let num of numeros) {
    console.log(num)
}