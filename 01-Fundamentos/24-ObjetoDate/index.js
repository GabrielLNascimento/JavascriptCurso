// criando o objeto Date() -> utilizando a palavra chave 'new'
const data1 = new Date()

// vendo a data atual -> formato gringo
console.log(data1.toString())


const data2 = new Date(0) // -> primeira data que teve
console.log(data2.toString()) // 01/01/1970 
// aparece diferente porque nosso fuso-horario é 3 horas a menos


// 60 segundos * 5 => 5 minutos
// 60 segundos * 30 => 30 minutos
// 60 segundos * 60 = 3600 segundos => 1 hora
// tem que multiplicar por 1000 => valor em milesimos de segundo
const tresHoras = 60 * 60 * 3 * 1000
const data3 = new Date(0 + tresHoras)
console.log(data3.toString())

// adicionando um dia => 24
const umDia = 60 * 60 * 24 * 1000
const data4 = new Date(0 + tresHoras + umDia)
console.log(data4.toString())


// colocando numeros literais
// ano - mes - dia - hora - minuto - segundo
const data5 = new Date(2020, 3, 20, 15, 30, 8)
console.log(data5.toString())

// posso omitir todos os parametro do Date()
// mas tem que ter pelo menos ano e 


// utilizando strings
const data6 = new Date('2020-04-02 23:30:15')
console.log(data6.toString())

console.log("------------------------------")

// metodos mais uteis
const data7 = new Date()

console.log(`Dia: ${data7.getDate()}`)
console.log(`Dia da semana: ${data7.getDay()}`)
console.log(`Mês: ${data7.getMonth() + 1}`) // mes começa no zero
console.log(`Ano: ${data7.getFullYear()}`)
console.log(`Hora: ${data7.getHours()}`)
console.log(`Minuto: ${data7.getMinutes()}`)
console.log(`Segundos: ${data7.getSeconds()}`)
console.log(`Milesimos: ${data7.getMilliseconds()}`) // 0 - domingo | 6 - sabado


console.log("------------------------------")

// função que formata uma data
function formataData(data) {
    const dia = zeroEsquerda(data.getDate())
    const mes = zeroEsquerda(data.getMonth() + 1)
    const ano = zeroEsquerda(data.getFullYear())
    const hora = zeroEsquerda(data.getHours())
    const min = zeroEsquerda(data.getMinutes())
    const sec = zeroEsquerda(data.getSeconds())

    return `${dia}/${mes}/${ano} ${hora}:${min}:${sec}`
}

function zeroEsquerda(num) {
    return num < 10 ? `0${num}` : num
}

const data8 = new Date()
const dataBrasil = formataData(data8)
console.log(dataBrasil)