function Fibonacci(num) {
    if (num <= 2) return [0, 1]
    
    let [a, b] = [0, 1]
    let result = [a]

    for (let i = 0; i < num; i++) {
        [a, b] = [b, a + b]
        result.push(a)
    }
    return result
}

console.log(Fibonacci(10))