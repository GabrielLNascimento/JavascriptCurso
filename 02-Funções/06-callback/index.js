const rand = (min = 1000, max = 3000) => Math.floor(Math.random() * (max - min) + min)

function f1(callback) {
    setTimeout(() => {
        console.log("f1")
        if (callback) callback()
    }, rand())
}

function f2(callback) {
    setTimeout(() => {
        console.log("f2")
        if (callback) callback()
    }, rand())
}

function f3(callback) {
    setTimeout(() => {
        console.log("f3")
        if (callback) callback()
    }, rand())
}

// criamos uma corrente
// passamos uma funcao como parametro que vai executar os callbacks
// jeito ruim de fazer...
// f1(() => {
//     f2(() => {
//         f3(() => {
//             console.log("Ola mundo")
//         })
//     })
// })

f1(f1Callback)

function f1Callback() {
    f2(f2Callback)
}

function f2Callback() {
    f3(f3Callback)
}

function f3Callback() {
    console.log("Ola mundo")
}

console.log("Fim do programa")