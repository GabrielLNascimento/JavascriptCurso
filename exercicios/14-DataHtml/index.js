const container = document.getElementById("dataAtual")
const data = new Date()

function getDataAtual(data) {
    const dia = data.getDate()
    const mes = data.getMonth() 
    const ano = data.getFullYear()
    const hora = data.getHours()
    const min = data.getMinutes()
    const sec = data.getSeconds()
    const dayWeek = data.getDay()

    const diaSemanaFormatado = diaSemana(dayWeek)
    const mesFormatado = getMonthString(mes)

    const titulo = criaTitulo()
    titulo.textContent = `${diaSemanaFormatado}, ${dia} de ${mesFormatado} de ${ano} ${hora}:${min}:${sec}`
    container.appendChild(titulo)
}

function diaSemana(day) {
    let diaString;
    switch (day) {
        case 0:
            diaString = "Domingo"
            break
        case 1:
            diaString = "Segunda-feira"
            break
        case 2:
            diaString = "Terça-feira"
            break
        case 3:
            diaString = "Quarta-feira"
            break
        case 4:
            diaString = "Quinta-feira"
            break
        case 5:
            diaString = "Sexta-feira"
            break
        case 6:
            diaString = "Sabado"
            break
        default:
            diaString = "Dia invalido"
            break
    }

    return diaString
}

function getMonthString(mes) {    
    let mesString;
    
    switch (mes) {
        case 0:
            mesString = "Janeiro";
            break;
        case 1:
            mesString = "Fevereiro";
            break;
        case 2:
            mesString = "Março";
            break;
        case 3:
            mesString = "Abril";
            break;
        case 4:
            mesString = "Maio";
            break;
        case 5:
            mesString = "Junho";
            break;
        case 6:
            mesString = "Julho";
            break;
        case 7:
            mesString = "Agosto";
            break;
        case 8:
            mesString = "Setembro";
            break;
        case 9:
            mesString = "Outubro";
            break;
        case 10:
            mesString = "Novembro";
            break;
        case 11:
            mesString = "Dezembro";
            break;
        default:
            mesString = "Mês inválido";
    }
    
    return mesString;
}

function criaTitulo() {
    const h1 = document.createElement("h1")
    return h1
}

getDataAtual(data)