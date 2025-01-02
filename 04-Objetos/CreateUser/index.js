const btnEnviar = document.getElementById("btn-submit")
const container = document.getElementById("container")

btnEnviar.addEventListener("click", (e) => {
    e.preventDefault()
    const nome = document.getElementById("name").value
    const senha = document.getElementById("password").value
    const email = document.getElementById("email").value

    if (!nome || !senha || !email) return

    const user = new CreateUser(nome, senha, email)
    addUser(user)
    cleanInput()
})

function CreateUser(nome, senha, email) {
    return Object.defineProperties(this, {
        nome: {
            enumerable: true,
            writable: true,
            configurable: true,
            value: nome
        },
        senha: {
            enumerable: true,
            writable: true,
            configurable: true,
            value: senha
        },
        email: {
            enumerable: true,
            writable: true,
            configurable: true,
            value: email
        },
    })
}

function addUser(user) {
    let paragrafo = document.createElement("p")
    paragrafo.innerHTML = `${user.nome} - ${user.senha} - ${user.email} <br>`
    container.appendChild(paragrafo)
}

function cleanInput() {
    document.getElementById("name").value = ""
    document.getElementById("password").value = ""
    document.getElementById("email").value = ""
}