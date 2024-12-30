const horaAtual = document.getElementById('horaAtual')
const btnInicio = document.getElementById('btn-inicio')
const btnPausar = document.getElementById('btn-pausar')
const btnZerar = document.getElementById('btn-zerar')

let segundos = 0
let timer

btnInicio.addEventListener("click", () => {
    horaAtual.classList.remove("red")
    timer = setInterval(() => {
        segundos++
        horaAtual.textContent = criaHoraDosSegundos(segundos)
    }, 1000)
    btnInicio.disabled = true
})

btnPausar.addEventListener("click", () => {
    setTimeout(() => {
        clearInterval(timer)
        btnInicio.disabled = false
        horaAtual.classList.add("red")
    }, 10)
})

btnZerar.addEventListener("click", () => {
    horaAtual.textContent = criaHoraDosSegundos(0)
    segundos = 0
})


function criaHoraDosSegundos(segundos) {
    // javascript recebe os segundos parametro como milessimos
    const data = new Date(segundos * 1000)
    return data.toLocaleTimeString('pt-br', {
        hour12: false,
        timeZone: "UTC"
    })
}

