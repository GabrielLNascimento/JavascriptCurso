// Produto -> nome, preco
// Camisa = Cor + Produto
// Caneca = Materia + Produto
// Quero ter possibilidade de aumento e desconto para os dois
// Vou criar no prototype do Produto

function Produto(nome, preco) {
    this.nome = nome
    this.preco = preco
}
Produto.prototype.aumento = function(quantia) {
    return this.preco += quantia
}
Produto.prototype.desconto = function(quantia) {
    return this.preco -= quantia
}


function Camisa(nome, preco, cor) {
    // chamar a função construtora do objeto Produto
    // passando como parametro, a propria função + os parametros nome e preco
    Produto.call(this, nome, preco)
    this.cor = cor
}

// Quero com que a 'camisa1' tenha o mesmo prototype que o objeto Produto
Camisa.prototype = Object.create(Produto.prototype)

// quando crio uma nova camisa, o construtor está sendo o Produto e não a Camisa
// preciso linkar o construtor com a Camisa
Camisa.prototype.constructor = Camisa; // agora o construtor é a Camisa

// sobrescrever o metodo aumento da função construtora pai (Produto)
Camisa.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100))
}

const camisa1 = new Camisa("polo", 10, "Preto")
camisa1.aumento(30) // 30%
console.log(camisa1)


function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco)
    this.material = material

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function() {
            return estoque
        },
        set: function(valor) {
            estoque += valor
        }
    })
}

// herança, passando as propriedades de produto para caneca
Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.constructor = Caneca

Caneca.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100))
}

const caneca1 = new Caneca("Xicara", 15, "Argila", 5)
caneca1.aumento(30) // 30%
console.log(caneca1)

console.log(caneca1.estoque)
caneca1.estoque = 10
console.log(caneca1.estoque)