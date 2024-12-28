function divisivel(num) {
    if (typeof num != "number") return false
    if (num%3 == 0 && num%5 == 0) return "FizzBuzz"
    if (num%3 == 0) return "Fizz"
    if (num%5 == 0) return "Buzz"
    return num
}

console.log(divisivel('aaa'))
console.log(divisivel("10"))
console.log(divisivel(9))
console.log(divisivel(20))
console.log(divisivel(15))
console.log(divisivel(7))