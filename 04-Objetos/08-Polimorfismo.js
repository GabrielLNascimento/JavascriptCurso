// super classe
function Conta(agencia, conta, saldo) {
    this.agencia = agencia
    this.conta = conta
    this.saldo = saldo
}
Conta.prototype.sacar = function(valor) {
    if (valor > this.saldo) {
        console.log("Valor indisponivel para sacar")
        this.verSaldo()
        return
    }

    this.saldo -= valor
    console.log(`Você sacou R$:${valor},00`)
    this.verSaldo()
    return
}
Conta.prototype.depositar = function(valor) {
    this.saldo += valor
    console.log(`Voce depositou R$:${valor},00`)
    this.verSaldo()
}
Conta.prototype.verSaldo = function() {
    console.log(`Agencia: ${this.agencia}/${this.conta}`)
    console.log(`Saldo atual: ${this.saldo}`)
    console.log("----------------------------------------")
}


function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo)
    this.limite = limite
}
// herdar os metodos do objeto Conta
ContaCorrente.prototype = Object.create(Conta.prototype)
ContaCorrente.prototype.constructor = ContaCorrente
ContaCorrente.prototype.sacar = function(valor) {
    if (valor > (this.saldo + this.limite)) {
        console.log(`Limite atingido`)
        return
    }

    this.saldo -= valor
    console.log(`Você sacou ${valor}`)
    this.verSaldo()
    return
}


function ContaPoupanca(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo)
}
// herdar os metodos do objeto Conta
ContaPoupanca.prototype = Object.create(Conta.prototype)
ContaPoupanca.prototype.constructor = ContaPoupanca

// const cc = new ContaCorrente("inter", 'corrente', 0, 100)
// cc.depositar(50)
// cc.sacar(80)
// cc.sacar(110)

const cp = new ContaPoupanca("inter", "Poupança", 0)
cp.depositar(50)
cp.sacar(50)
cp.sacar(110)

