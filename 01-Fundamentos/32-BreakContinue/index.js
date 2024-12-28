let i = 0
let max = 10

while (i < max) {
    i++
    
    // continue vai pular a iteração
    if (i === 3) {
        console.log("Vou pular o 3")
        continue
    }

    if (i === 8) {
        console.log("Vou quebrar no 8")
        break
    }
    
    console.log(i)

}

console.log("Fim do programa")