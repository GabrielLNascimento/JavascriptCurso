// desacoplando os métodos
const falar = {
    falar() {
        console.log(`${this.nome} está falando`)
    }
}

const comer = {
    comer() {
        console.log(`${this.nome} está comendo`)
    }
}

const beber = {
    beber() {
        console.log(`${this.nome} está bebendo`)
    }
}

// criando a pessoaPrototype e armazenar todos os métodos criados antes
// const pessoaPrototype = { ...falar, ...comer, ...beber }
const pessoaPrototype = Object.assign({}, falar, comer, beber)

function criaPessoa(nome, sobrenome) {
    // cria um objeto que vai ser os metodos de cada pessoa
    // const pessoaPrototype = {
    //     falar() {
    //         console.log(`${this.nome} está falando`)
    //     },

    //     comer() {
    //         console.log(`${this.nome} está comendo`)
    //     },

    //     beber() {
    //         console.log(`${this.nome} está bebendo`)
    //     }
    // }
    
    // criei um objeto vazio para poder linkar os metodos
    // o segundo argumento vai ser as propriedades
    return Object.create(pessoaPrototype, {
        nome: {
            enumerable: true,
            value: nome
        },
        sobrenome: {
            enumerable: true,
            value: sobrenome
        }
    })
}

const p1 = criaPessoa("Gabriel", "Liz")
const p2 = criaPessoa("Emilly", "Pedrozo")
console.log(p1)
console.log(p2)
// p1.falar()
// p1.comer()
// p1.beber()

