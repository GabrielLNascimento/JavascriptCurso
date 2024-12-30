function adicionador(add) {
    function addNum(num) {
        return num + add
    }
    return addNum
}
const add5 = adicionador(5)
console.log(add5(10))


function operador(op) {
    const soma = (a, b) => a + b
    const sub = (a, b) => a - b
    const mult = (a, b) => a * b
    const div = (a, b) => a / b
    
    switch (op) {
        case '+':
            return soma
        case '-':
            return sub
        case '*':
            return mult
        case '/':
            return div
        default:
            return false
    }
}

const op1 = operador('+')
const op2 = operador('-')
const op3 = operador('*')
const op4 = operador('/')
const op5 = operador('aaa')

console.log(op1(10, 5))
console.log(op2(10, 5))
console.log(op3(10, 5))
console.log(op4(10, 5))
// console.log(op5(10, 5)) -> erro