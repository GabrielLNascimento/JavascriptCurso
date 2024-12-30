// função construtora - objetos
// funções construtoras inicia com letra maiusculas
// sempre quando for criar uma nova pessoa utiliza a palavra 'new'

function Pessoa(nome, sobrenome) {
    let ID = 666
    let metodoInterno = () => {
        console.log("Sou um metodo interno")
    }

    this.nome = nome
    this.sobrenome = sobrenome

    this.nomeCompleto = () => `${ID} - ${this.nome} ${this.sobrenome}`
}
// cria o objeto automaticamente
const p1 = new Pessoa("Gabriel", "Liz")
console.log(p1)
console.log(p1.nomeCompleto())