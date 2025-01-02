// metodos estaticos -> metodos que apenas estão ligados dentro da classe
// usa uma palavra-chave "static" que vem antes do nome do metodo
// so consigo acessar pela classe

/*
class <Nome classe> {
    static <Nome Metodo>() { codigo }
}

- chamando:
<Nome classe>.<Nome Metodo>()

--> nao preciso instanciar a classe para chamar o metodo estatico
*/

class Counter {
    static num = 0;

    static increment() {
        return this.num += 1
    }
}

// console.log(Counter.increment())
// console.log(Counter.increment())
// console.log(Counter.increment())


class EmailValidator {
    static isValid(email) {
        const indexA = email.indexOf("@")
        const ponto = email.indexOf(".")

        return indexA < ponto && indexA > 0 ? true : false
    }
}

console.log(EmailValidator.isValid("gabriel@gmail.com"))