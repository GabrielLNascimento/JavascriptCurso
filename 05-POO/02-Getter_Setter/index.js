const _velocidade = Symbol()
// propriedade privada
// gera um id aleatorio a cada vez q eu gerar um symbol
// Symbol() === Symbol() -> false
// para funcionar preciso usar a notação [ ]

class Carro {
    constructor(nome) {
        this.nome = nome
        // this.velocidade = 0
        this[_velocidade] = 0
    }

    //palavra chave get
    get velocidade() {
        return this[_velocidade]
    }

    set velocidade(vel) {
        if (typeof vel !== 'number') return
        if (vel > 100 || vel < 0) return
        this[_velocidade] = vel
    }

    acelerar() {
        if (this[_velocidade] >= 100) return
        this[_velocidade]++
    }

    desacelerar() {
        if (this[_velocidade] <= 0) return
        this[_velocidade]--
    }
}

const car = new Carro("Fiat")

for (let i = 0; i <= 200; i++) {
    car.acelerar()
}

car.velocidade = 99
car.velocidade = 2000
car.velocidade = 'aaa'

// temos que previnir esse tipo de erro abaixo
// car.velocidade = 1500
// caso isso aconteça, a velocidade fica 1500

console.log(car)
console.log(car.velocidade)


console.log("---------------------")

class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome
        this.sobrenome = sobrenome
    }

    get nomeCompleto() {
        return this.nome + " " + this.sobrenome
    }

    set nomeCompleto(valor) {
        const [nome, ...sobrenome] = valor.split(' ')
        this.nome = nome
        this.sobrenome = sobrenome.join(" ")
    }
}

const p1 = new Pessoa("Gabriel", "Liz")

p1.nomeCompleto = 'Joao Augusto da Silva'

console.log(p1.nomeCompleto)