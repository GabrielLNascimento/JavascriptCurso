// defineProperty - defineProperties

function Produto(nome, preco, estoque) {
    // variavel publica
    // this.nome = nome
    // this.preco = preco

    // definir propriedades de um objeto
    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: true,
            configurable: false
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: false,
            configurable: false
        }
    })


    // definir uma propriedade nova
    Object.defineProperty(this, 'estoque', {
        // vai ser exibido
        enumerable: true,
        
        // setar valor na propriedade
        value: estoque, // parametro da funcao

        // posso alterar o valor?
        writable: false, // nao pode alterar

        // pode apagar, reconfigurar a chave?
        configurable: false // ela é reconfiguravel
    })

   
}

const p1 = new Produto("Camisa", 12, 5)
p1.estoque = 9999 // nao vai ser alterado
delete p1.estoque // nao permite apagar a chave
console.log(p1)

console.log("------------------------------")

console.log(Object.keys(p1))