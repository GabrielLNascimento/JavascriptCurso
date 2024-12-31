// new Object -> todas tem Object.prototype
const objA = {
    chaveA: "A",
    // __proto__: Object.prototype
    falar: function() {
        return `Opa pessoal`
    }
}
console.dir(objA)

const objB = {
    chaveB: "B"
    // __proto__: objA
}

const objC = {
    chaveC: "C"
}

Object.setPrototypeOf(objB, objA)
Object.setPrototypeOf(objC, objB)
// no prototype do objB, vou ter o objA
console.dir(objB)
console.dir(objC)

// metodos/propriedades do prototype do objeto
console.log(Object.getPrototypeOf(objA))


function Produto(nome, preco) {
    this.nome = nome
    this.preco = preco
}
Produto.prototype.desconto = function(valor) {
    this.preco -= valor
    console.log(this.preco)
}

Produto.prototype.aumento = function(valor) {
    this.preco += valor
    console.log(this.preco)
}

const p1 = new Produto("Caneca", 17)
console.log(p1)

const p2 = {
    nome: "Geladeira",
    preco: 23
}

Object.setPrototypeOf(p2, Produto.prototype)
console.log(p2)


const p3 = Object.create(Produto.prototype, {
    // configurar chaves
    nome: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: "Cadeira"
    },
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 14
    }
})
// p3.nome = "Cadeira"
// p3.preco = 14
console.log(p3)