const ligar = {
    ligar() {
        if (this.ligado) {
            console.log("Carro ja está ligado")
        }
        this.ligado = true
        return  
    }
}

const desligar = {
    desligar() {
        if (!this.ligado) {
            console.log("Carro ja está desligado")
        }
        this.ligado = false   
        return
    }
}

const CarroPrototype = Object.assign({}, ligar, desligar)

function CreateCar(nome, velMax) {
    return Object.create(CarroPrototype, {
        nome: {
            enumerable: true,
            value: nome
        },
        velMax: {
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

const car = new CreateCar("Fiat", 100)

car.ligar()
car.ligar()
car.desligar()
car.desligar()
console.log(car)