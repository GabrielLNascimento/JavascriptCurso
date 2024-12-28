function ehPaisagem(largura, altura) {
    return altura > largura ? false : true
}

console.log(ehPaisagem(500, 1000))
console.log(ehPaisagem(1000, 500))