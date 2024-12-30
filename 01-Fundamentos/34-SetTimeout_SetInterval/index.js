// função que retorna a hora atual
function mostraHora() {
    const data = new Date()

    return data.toLocaleTimeString('pt-br', {
        hour12: false
    })
}

function handleInterval() {
    console.log(mostraHora())
}

// configurar um intervalo de tempo para uma função ser executada
// estou passando apenas a referencia da função, sem chamar ela
// setInterval(handleInterval, 1000)
// metodo ruim de fazer


// metodo mais recomendado
// setInterval(() => {
//     console.log(mostraHora())
// }, 1000)


// atribuindo a uma variavel
// vantagem => posso usar o metodo de clearInterval
const timer = setInterval(() => {
    console.log(mostraHora())
}, 1000)


// tempo que vai executar apenas uma vez
setTimeout(() => {
    // metodo que vai limpar o setInterval
    clearInterval(timer)
}, 3000) // vai ser executada em 3 segundos


// mostrando mensagem
setTimeout(() => {
    console.log("Ola pessoal")
}, 3000)