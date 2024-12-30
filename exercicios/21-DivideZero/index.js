function divide(n1, n2) {
    try {
        if (
            typeof n1 !== "number" || 
            typeof n2 !== "number"
        ) {
            throw new Error("Tipo de dado inválido")
        }

        if (n2 === 0) {
            throw new Error("Não podemos dividir por zero")
        } 

        console.log(n1 / n2)
    } catch(err) {
        console.log(err)
    } finally {
        console.log("Operação finalizada")
    }
}

divide(10, 5)
divide('10', 2)
divide(2, '2')
divide(2, 0)