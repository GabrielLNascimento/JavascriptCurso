const nome = "Gabriel"

function falaNome() {
    console.log(nome) // acessar variaveis de fora da função
}

function falaNome2() {
    const nome = "Liz" // dentro da função a variavel é outra
    console.log(nome)
}

falaNome()