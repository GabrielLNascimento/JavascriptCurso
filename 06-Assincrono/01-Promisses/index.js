function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo, cb) {
    setTimeout(() => {
        console.log(msg)
        if (cb) cb()
    }, tempo)
}

// esperaAi("FRASE 1", aleatorio(1000, 5000))
// esperaAi("FRASE 2", aleatorio(1000, 5000))
// esperaAi("FRASE 3", aleatorio(1000, 5000))

// preciso de uma forma para dizer pro js executar primeiro a 'frase 1' e dps só vai executar a 'frase 2' quando terminar o 'frase 1'

// utilizando callback
// esperaAi("Frase 1", aleatorio(1000, 5000), function() {
//     esperaAi("Frase 2", aleatorio(1000, 5000), function() {
//         esperaAi("Frase 3", aleatorio(1000, 5000))
//     })
// })
// sempre vai executar em ordem
// pessimo jeito de fazer


// utilizando promisses
function esperaAi(msg, tempo) {
    // criando a promisse
    // sempre recebe dois parametros
    return new Promise((resolve, reject) => {
        
        if (typeof msg !== "string") reject("Bad Value")

        setTimeout(() => {
            resolve(msg) 
        }, tempo)  
    })
}
// then -> vai ser executado quando o resolve() for chamado
esperaAi("frase 1", aleatorio(1000, 3000))
    .then(msg => {
        console.log(msg)
        return esperaAi("Frase 2", aleatorio(1000, 3000))
    })
    .then(msg => {
        console.log(msg)
        return esperaAi(2222, aleatorio(1000, 3000))
    })
    .then(msg => {
        console.log(msg)
    })
    .catch(err => {
        console.log(err)
    })

// executa o codigo em paralelo
console.log("Isso vai ser exibido antes de qualquer promisse")