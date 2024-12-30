// Declaração normal -> usando palavra-chave
// conhecida como (function hoisting)
// o interpretador do javascript vai elevar as funções
// poderia utilizar a função antes de criar ela
falaOi()
function falaOi() {
    console.log("Oi")
}


// First-class Objects (Objetos de primeira classe)
// posso tratar as funções como dado
// exemplo de um dado qualquer:
const nome = "Gabriel"
// ao invez de colocar uma variavel, colocar uma função
const souUmDado = function() {
    console.log("Sou um dado qualquer")
}
souUmDado()


// executar o parametro da função
function ExecutaFunc(funcao) {
    console.log("Vou executar a função")
    funcao()
}
// passando outra função como paramentro, sem executa-la -> sem os ( )
ExecutaFunc(souUmDado)



// arrow functions (funções de flecha)
// jeito mais recomendado para fazer
// tem algumas diferenças com o jeito tradicional de criar uma função
const FuncArrow1 = () => {
    console.log("Executando arrow funtion")
} 
FuncArrow1()

// exemplo com arrow function
// setInterval(() => {
//     console.log("Executei")
// }, 1000)


// funções dentro de um Objeto
const obj = {
    falar: function() {
        console.log("Falei")
    },

    acenar() {
        console.log("Acenei")
    }
}
// metodo classico
obj.falar()
obj.acenar()

