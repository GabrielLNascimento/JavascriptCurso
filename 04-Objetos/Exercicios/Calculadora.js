function Calculadora(n1, n2) {
    Object.defineProperties(this, {
        n1: {
            enumerable: true,
            value: n1,
            writable: true
        },
        n2: {
            enumerable: true,
            value: n2,
            writable: true
        }
    })
}

Calculadora.prototype.soma = function() {
    return this.n1 + this.n2
}

Calculadora.prototype.sub = function() {
    return this.n1 - this.n2
}

Calculadora.prototype.mult = function() {
    return this.n1 * this.n2
}

Calculadora.prototype.div = function() {
    return this.n1 / this.n2
}

const calc = new Calculadora(10, 2)
console.log(calc)
console.log(calc.soma())
console.log(calc.sub())
console.log(calc.mult())
console.log(calc.div())