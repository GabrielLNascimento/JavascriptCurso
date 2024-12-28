const container = document.getElementById("res")

const elementos = [
    { tag: "p", texto: "Frase 1" },
    { tag: "div", texto: "Frase 2" },
    { tag: "footer", texto: "Frase 3" },
    { tag: "section", texto: "Frase 4" },
]

function gerarElementos(arrEl) {
    for (let el of arrEl) {
        const { tag, texto } = el
        const elemento = document.createElement(tag)
        elemento.textContent = texto
        container.appendChild(elemento)
    }
}

gerarElementos(elementos)