function Produto(nome, preco, estoque) {
    this.nome = nome
    this.preco = preco

    let estoquePrivado = estoque

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        // value: estoque, 
        // writable: false, 
        configurable: false,

        // configurar o "get"
        // faz o trabalho do "value"
        get: function() {
            return estoquePrivado
        },

        // configurar o "set"
        // faz o trabalho do writable
        set: function(valor) {
            // console.log(valor)
            if (typeof valor !== 'number') {
                throw new TypeError("Tipo de valor inválido")
            }
            estoquePrivado = valor
        }
    })
}

const p1 = new Produto("Camiseta", 12, 5)
console.log(p1)
console.log("Quantidade no estoque:", p1.estoque)

// p1.estoque = 'Ola pessoal'

p1.estoque = 10
console.log(p1.estoque)
