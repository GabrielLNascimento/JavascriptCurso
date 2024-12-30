function sevenBoom(arr) {
    const condSeven = arr.some((num) => {
        for (let char of num.toString()) {
            if (char == '7') {
                return true
            }
        } 
    })

    return condSeven ? "Boom!" : "there is no 7 in the array"
}
console.log(sevenBoom([10, 20, 30, 470]))


console.log(/7/.test([10, 20, 30, 470]) ? "boom" : "epa")