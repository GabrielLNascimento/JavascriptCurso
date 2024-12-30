// funcao que chama ela mesma
let string = ""

function asterisco(n) {
    if (n === 0) return
    string += "*"
    // console.log(string)
    return asterisco(n - 1)
}

asterisco(10)


function contagem(max) {
    if (max === 0) return
    console.log(max)
    return contagem(max - 1)
}
contagem(10)