function plusMinus(arr) {
    let numP = arr.filter((n) => n > 0).length
    let numN = arr.filter((n) => n < 0).length
    let numZ = arr.filter((n) => n == 0).length
    let tamArr = arr.length

    console.log((numP / tamArr).toFixed(6))
    console.log((numN / tamArr).toFixed(6))
    console.log((numZ / tamArr).toFixed(6))
}

plusMinus([1, 1, 0, -1, -1])