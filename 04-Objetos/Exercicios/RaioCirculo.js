function Circulo(raio) {
    this.raio = raio
}

Circulo.prototype.area = function() {
    return (Math.PI * Math.pow(this.raio, 2)).toFixed(2)
}

Circulo.prototype.circuferencia = function() {
    return (2 * Math.PI * this.raio).toFixed(2)
}

const circ = new Circulo(15)
console.log(circ.area())
console.log(circ.circuferencia())