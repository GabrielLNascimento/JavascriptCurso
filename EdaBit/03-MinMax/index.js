function MinMax(arr) {
    let minimo = maximo = arr[0];

    for (let num of arr) {
        minimo = num < minimo ? num : minimo
        maximo = num > maximo ? num : maximo
    }

    return [minimo, maximo]
}

console.log(MinMax([1, 2, 3, 4]))
console.log(MinMax([1]))