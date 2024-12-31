function CPF(cpf) {
    Object.defineProperty(this, 'cpf', {
        enumerable: true,
        configurable: false,
        get: function() {
            return cpf.match(/\d+/g).join("")
        }
    })  
}

CPF.prototype.PrimeiroDigito = function() {
    let cpf = this.cpf.slice(0, 9)
    let arrCpf = cpf.split("")
   
    let soma = arrCpf.reduce((acum, valor, indice) => {
        acum += (10 - indice) * parseInt(valor)
        return acum
    }, 0)

    const Digito = 11 - (soma % 11)
    return Digito > 9 ? 0 : Digito 
}

CPF.prototype.SegundoDigito = function(digito1) {
    const cpf = this.cpf.slice(0, 9) + digito1
    let arrCpf = cpf.split("")
    
    let soma = arrCpf.reduce((acum, valor, indice) => {
        acum += (11 - indice) * parseInt(valor)
        return acum
    }, 0)
    const Digito = 11 - (soma % 11)
    return Digito > 9 ? 0 : Digito
}

CPF.prototype.ValidarCpf = function() {
    const digito_1 = this.PrimeiroDigito()
    const digito_2 = this.SegundoDigito(digito_1)
    const novoCpf = this.cpf.slice(0, 9) + digito_1 + digito_2
    return novoCpf === this.cpf ? true : false
}

const cpf1 = new CPF("138.854.349-46")

const digito_1 = cpf1.PrimeiroDigito()
const digito_2 = cpf1.SegundoDigito(digito_1)
console.log(digito_1, digito_2)
console.log(cpf1.ValidarCpf())

