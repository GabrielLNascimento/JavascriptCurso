const arrayOfMultiples = (multiplo, max) => {
    let sequenceNum = []
    for (let i = 1; i <= max; i++) {
        sequenceNum.push(i * multiplo)
    }
    return sequenceNum
}

console.log(arrayOfMultiples(7, 5))