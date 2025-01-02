const _price = Symbol()

class Produto {
    constructor(nome, preco) {
        this.nome = nome
        this[_price] = preco
    }

    info() {
        console.log(`${this.nome} -> R$:${this[_price]},00`)
    }

    get price() {
       return "Preço da camisa: " + this[_price]
    }

    set price(valor) {
        if (typeof valor !== 'number' || !valor | valor <= 0) return
        this[_price] = valor
    }
}

const p = new Produto("Camisa", 59)
p.info()
p.price = 50
p.price = -50
console.log(p.price)

// Pesquisar plugin para ver os erros