function* geradora1() {
    // nao utiliza return
    // utilizamos o yield
    yield "Valor 1"
    yield "Valor 2"
    yield "Valor 3"
}

const g1 = geradora1()

for (let valor of g1) {
    console.log(valor)
}

function* gerador2() {
    yield "OI 1"
    yield "OI 2"
    yield "OI 3"
}

const g2 = gerador2()

while (true) {
    const valor = g2.next()

    if (valor.done == true) {
        console.log("Vou terminar")
        break
    }

    console.log(valor.value)
}

console.log("--------")

function* geradora3() {
    let i = 0

    while (true) {
        if (i === 10) return
        
        yield i
        i++
    }
}

const g3 = geradora3()

for (let val of g3) {
    console.log(val)
}

console.log("--------")

function* gerador4() {
    yield 1
    yield 2
    yield 3
}

function* gerador5() {
    yield* gerador4()
    yield 4
    yield 5
    yield 6
}

const g5 = gerador5()
for (let val of g5) {
    console.log(val)
}