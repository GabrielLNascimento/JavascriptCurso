class Palindromo {
    static isPalindromo(txt) {
        return txt.split("").reverse().join("") === txt ? true : false
    }
}

console.log(Palindromo.isPalindromo("gabriel"))
console.log(Palindromo.isPalindromo("radar"))