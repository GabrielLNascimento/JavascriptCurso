import ValidaCPF from "./ValidaCPF.js";

export default function gerarCPF() {
    const cpf = Math.floor(Math.random() * 999999999).toString()
    return cpf.length === 9 ? verificaCPF(cpf) : gerarCPF()
}

function verificaCPF(cpf) {
    const validaCPF = new ValidaCPF(cpf)
    const cpfValido = validaCPF.geraCPF(cpf)
    return formataCPF(cpfValido)
}

function formataCPF(cpf) {
    return (
        cpf.slice(0, 3) + '.' +
        cpf.slice(3, 6) + '.' +
        cpf.slice(6, 9) + '-' +
        cpf.slice(9, 11)
    )
}