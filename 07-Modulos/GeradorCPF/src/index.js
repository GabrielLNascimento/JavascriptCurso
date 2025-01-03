import './assets/css/style.css';
import cpfGerado from './modules/GeradorCPF.js';

const btnGera = document.querySelector('#btn-gera');
const container = document.querySelector('.resultado');

btnGera.addEventListener('click', () => {
    const cpf = cpfGerado();
    const elemento = document.createElement('p');
    elemento.textContent = cpf;
    
    container.textContent = ""
    container.appendChild(elemento);
});
