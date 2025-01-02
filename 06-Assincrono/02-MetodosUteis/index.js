// Promise.all
// Promise.race
// Promise.resolve
// Promise.reject

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        
        if (typeof msg !== "string") reject("Bad Value")

        setTimeout(() => {
            resolve(msg) 
        }, tempo)  
    })
}

const promises = [
    "Primeiro valor",
    esperaAi("Promise 1", 3000),
    esperaAi("Promise 2", 1000),
    esperaAi("123", 2000),
    "Outro valor"
]

// resolve todos as promises do array
Promise.all(promises)
    .then(valor => {
        console.log(valor)
    })
    .catch(err => {
        console.log(err)
    })


// entrega a primeira promessa resolvida
Promise.race(promises)
    .then(valor => {
        console.log(valor)
    })
    .catch(err => {
        console.log(err)
    })


function baixarPagina() {
    const emCache = true

    if(emCache) {
        return Promise.resolve("Pagina em cache")
    } else {
        return esperaAi("Baixa a pagina", 1000)
    }
}

baixarPagina()
    .then(val => console.log(val))
    .catch(err => console.log(err))