function diagonalDifference(arr) {
    let soma1 = arr.reduce((acum, valor, i) => acum += arr[i][i], 0)
    let soma2 = arr.reduce((acum, valor, i) => acum += arr[i][arr.length - 1 - i], 0)
    const result = soma1 - soma2
    return result > 0 ? result : result*-1
}   

const arr = [
    [6, 6, 7],
    [4, 5, 6],
    [10, 8, -12]
]
console.log(diagonalDifference(arr))