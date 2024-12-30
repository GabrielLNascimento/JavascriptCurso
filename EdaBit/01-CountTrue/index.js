function countTrue(arr) {
    let count = 0
    for (let item of arr) {
        count += item ? 1 : 0
    }
    return count
}

console.log(countTrue([true, false, false, true, false]))