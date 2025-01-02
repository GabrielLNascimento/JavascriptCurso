function simpleArraySum(ar) {
    return ar.reduce((acum, valor) => acum += valor)
}

console.log(simpleArraySum([1,22,3,4,]))