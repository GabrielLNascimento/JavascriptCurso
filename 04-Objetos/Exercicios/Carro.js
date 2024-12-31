const info = {
    info() {
        console.log(`Marca: ${this.marca}`)
        console.log(`Ano: ${this.ano}`)
        console.log(`Velocidade: ${this.vel}`)
    }
}

const ligar = {
    ligar() {
        if (this.ligado) {
            console.log(`${this.marca} ja está ligado`)
            return
        }
        this.ligado = true
        console.log(`${this.marca} foi ligado`)
        return
    }
}

const desligar = {
    desligar() {
        if (!this.ligado) {
            console.log(`${this.marca} ja está desligado`)
            return
        }
        this.ligado = false
        console.log(`${this.marca} foi desligado`)
        return
    }
}

const acelerar = {
    acelerar(valor) {
        if (!valor) {
            console.log("Precisa passar a kilometragem")
            return
        }
        
        if (!this.ligado) {
            console.log("Voce precisa ligar o carro para acelerar")
            return
        }

        console.log(`${this.marca} está andando a ${valor} km/h`)
        return
    }
}

const CarroPrototype = Object.assign({}, info, ligar, desligar, acelerar)

function Carro(marca, ano, velMax) {
    return Object.create(CarroPrototype, {
        marca: {
            enumerable: true,
            value: marca
        },
        ano: {
            enumerable: true,
            value: ano
        },
        vel: {
            enumerable: true,
            value: velMax
        },
        ligado: {
            enumerable: true,
            value: false,
            writable: true,
            configurable: true
        }
    })
}

const car = Carro("Fiat", 2018, 150)
car.ligar()
car.acelerar(40)
console.log(car)
