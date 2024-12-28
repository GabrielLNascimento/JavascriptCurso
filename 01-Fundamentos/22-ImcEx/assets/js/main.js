// pegar valores do form
const form = document.getElementById("formulario")
const container = document.getElementById('resultado')

form.addEventListener("submit", (event) => {
    event.preventDefault()

    const peso = document.getElementById("peso").value
    const altura = document.getElementById("altura").value

    const ImcCalculado = CalcularImc(peso, altura)
    const nivelImc = verificaImc(ImcCalculado)
    
    if (nivelImc[0] == -1) return
    
    addContainer(ImcCalculado, nivelImc)
})

function CalcularImc(peso, altura) {
    return peso / (altura * altura)
}

function verificaImc(imc) {
    if (imc < 18.5) return [0, 'Abaixo do peso']
    if (imc <= 24.9) return [1, 'Peso normal']
    if (imc <= 29.9) return [2, 'Sobrepeso']
    if (imc <= 34.9) return [3, 'Obesidade grau 1']
    if (imc <= 39.9) return [4, 'Obesidade grau 2']
    if (imc >= 40) return [5, 'Obesidade grau 3']

    return -1
}

function addContainer(imc, nivel) {
    const paragrafo = document.createElement("p")
    
    paragrafo.textContent = `Resultado: ${imc.toFixed(2)} - Nivel: ${nivel[1]}`

    container.appendChild(paragrafo)
}