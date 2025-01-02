function simpleArraySum(ar) {
    return ar.reduce((acum, valor) => acum + valor, 0)
}

console.log(simpleArraySum([1000,22,3,4,]))