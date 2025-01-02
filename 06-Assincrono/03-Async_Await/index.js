function rand(min, max) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        
        if (typeof msg !== "string") reject("Bad Value")

        setTimeout(() => {
            resolve(msg) 
        }, tempo)  
    })
}

// esperaAi("Frase 1", rand(1, 3))
//     .then(res => {
//         console.log(res)
//         return esperaAi("Frase 2", rand(1, 3))
//     })
//     .then(res => {
//         console.log(res)
//         return esperaAi("Frase 3", rand(1, 3))
//     })
//     .then(res => {
//         console.log(res)
//     })
//     .catch(err => console.log(err))

async function executa() {
    try {
        const fase1 = await esperaAi("Frase 1", rand(1, 5))
        console.log(fase1)
    
        const fase2 = await esperaAi("Frase 2", rand(1, 5))
        console.log(fase2)
    
        const fase3 = await esperaAi("Frase 3", rand(1, 5))
        console.log(fase3)
    
    } catch (err) {
        // executa o reject da promise
        console.log(err)
    }
    
    console.log("fim da função")
}
executa()
