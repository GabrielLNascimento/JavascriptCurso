import './assets/css/style.css';
import senha from './modules/GerarSenha.js'

const btnGera = document.getElementById("btnGerar")

btnGera.addEventListener("click", () => {
    const container = document.querySelector(".resultado")
    container.textContent = senha()
})