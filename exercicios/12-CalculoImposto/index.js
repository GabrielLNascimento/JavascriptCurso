const calculoImposto = (salario) => {
    return salario <= 2000 ? 'isento' :
        salario <= 5000 ?  salario * 0.1 : salario * 0.2
}

console.log(calculoImposto(1500))
console.log(calculoImposto(3000))
console.log(calculoImposto(7000))