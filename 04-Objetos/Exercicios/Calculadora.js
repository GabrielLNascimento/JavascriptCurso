function Calculadora(n1, n2) {
    this.n1 = n1
    this.n2 = n2
}

Calculadora.prototype.Somar = function() {
    return this.n1 + this.n2
}

Calculadora.prototype.Sub = function() {
    return this.n1 - this.n2
}

Calculadora.prototype.Mult = function() {
    return this.n1 * this.n2
}

Calculadora.prototype.Div = function() {
    return this.n1 / this.n2
}

const calc = new Calculadora(10, 20)
console.log(calc.Somar())
console.log(calc.Sub())
console.log(calc.Mult())
console.log(calc.Div())