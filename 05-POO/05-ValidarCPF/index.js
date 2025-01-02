class ValidaCPF { 
    constructor(cpfEnviado) {
        // this.cpf = cpfEnviado.match(/\d+/g).join("")
        Object.defineProperty(this, "cpf", {
            enumerable: true,
            writable: true,
            configurable: false,
            value: cpfEnviado.match(/\d+/g).join("")
        })
    }

    Valida() {
        if(!this.cpf) return false
        if(typeof this.cpf !== 'string') return false
        if(this.cpf.length !== 11) return false
        if(this.eSequencia()) return false

        const digito_1 = this.PrimeiroDigito()
        const digito_2 = this.SegundoDigito(digito_1)
        const novoCpf = this.cpf.slice(0, 9) + digito_1 + digito_2
        
        return novoCpf === this.cpf ? true : false
    }

    eSequencia() {
        return this.cpf.charAt(0).repeat(11) === this.cpf
    }

    PrimeiroDigito() {
        let cpf = this.cpf.slice(0, 9)
        let arrCpf = cpf.split("")
   
        let soma = arrCpf.reduce((acum, valor, indice) => {
            acum += (10 - indice) * parseInt(valor)
            return acum
        }, 0)

        const Digito = 11 - (soma % 11)
        return Digito > 9 ? 0 : Digito
    }

    SegundoDigito(digito1) {
        const cpf = this.cpf.slice(0, 9) + digito1
        let arrCpf = cpf.split("")
        
        let soma = arrCpf.reduce((acum, valor, indice) => {
            acum += (11 - indice) * parseInt(valor)
            return acum
        }, 0)
        const Digito = 11 - (soma % 11)
        return Digito > 9 ? 0 : Digito
    }
}

const cpf1 = new ValidaCPF("13885434946")

console.log(cpf1.Valida())