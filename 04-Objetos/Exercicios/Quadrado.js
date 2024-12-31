const area = {
    area() {
        const area = this.lado * 2
        console.log(area)
    }
}

const quadradoPrototype = Object.assign({}, area)

function Quadrado(lado) {
    return Object.create(quadradoPrototype, {
        lado: {
            enumerable: true,
            value: lado
        }
    })
}

const quadrado = Quadrado(15)
quadrado.area()