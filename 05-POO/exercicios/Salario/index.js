const _salario = Symbol()

class Empolyee {
    constructor(salario) {
        this[_salario] = salario
    }

    get Salario() {
        return this[_salario]
    }

    set Salario(valor) {
        if (typeof valor !== 'number' || !valor) return
        this[_salario] = valor
    }
}

const p1 = new Empolyee(10)
console.log(p1.Salario)
p1.Salario = 150
console.log(p1.Salario)