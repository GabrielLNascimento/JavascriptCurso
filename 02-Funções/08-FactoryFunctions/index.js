// this -> refere-se a propriedade do proprio objeto

function criaPessoa(nome, sobrenome, idade, peso, altura) {
    return { 
        nome,
        sobrenome, 
        idade,
        peso,
        altura,
        fala(txt) {
            return `${this.nome} está falando '${txt}'`
        },
        get imc() {
            return (peso / (altura * altura)).toFixed(2)
        },
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },
        set nomeCompleto(valor) {
            const arrNome = valor.split(" ")
            const [nome, ...sobrenome] = arrNome 
            this.nome = nome
            this.sobrenome = sobrenome
        }
    }
}

const p1 = criaPessoa("Gabriel", "Liz", 17, 80, 1.90)
console.log(p1)
console.log(p1.fala('oi pessoal'))

// quando coloco palavra get na frente do metodo, eu posso chamar ele sem ( )
const imcUser = p1.imc
console.log(imcUser)

p1.nomeCompleto = "Emilly Pedrozo"
console.log(p1.nomeCompleto)

