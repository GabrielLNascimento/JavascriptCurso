function Tribonacci(num) {
    if (num <= 3) return [1, 1, 1]

    let [a, b, c] = [1, 1, 1]
    let result = [a, b, c]

    for (let i = 0; i <= num; i++) {
        [a, b, c] = [b, c, a + b + c]
        result.push(c)
    }

    return result
}

console.log(Tribonacci(10))