function Animal(nome) {
    this.nome = nome
}

Animal.prototype.emitirSom = function() {
    return `${this.nome} fazendo som`
}

function Cachorro(nome, som) {
    Animal.call(this, nome)
    this.som = som
}

Cachorro.prototype = Object.create(Animal.prototype)
Cachorro.prototype.constructor = Cachorro

// qualquer metodo tem que ser definido depois das configurações de cima
Cachorro.prototype.emitirSom = function() {
    return `${this.nome} fazendo ${this.som}`
}


const dog = new Cachorro('Pitbul', "Au au")
console.log(dog.emitirSom())