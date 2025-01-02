function calculadora(n1, n2, op) {
    return new Promise((res, rej) => {
        switch (op) {
            case "+":
                res(n1 + n2)
                break
            case "-":
                res(n1 - n2)
                break
            case "*":
                res(n1 * n2)
                break
            case "/":
                if (n2 === 0) {
                    rej("Erro ao dividir")
                    return 
                } 
                res(n1 / n2)

                break
            default:
                rej("Operador invalido")
        }
    })
}

calculadora(10, 2, "+")
    .then(res => {
        console.log(res)
        return calculadora(10, 2, "-")
    })
    .then(res => {
        console.log(res)
        return calculadora(10, 2, "*")
    })
    .then(res => {
        console.log(res)
        return calculadora(10, 2, "/")
    })
    .then(res => {
        console.log(res)
        console.log("Fim do programa")
    })
    .catch(err => {
        console.log(err)
    })