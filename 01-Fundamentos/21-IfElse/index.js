const hora = 18;

if (hora < 12 && hora >= 0) {
    console.log("Bom dia")
} else if (hora < 18 && hora >= 12) {
    console.log("Boa tarde")
} else if (hora < 23 && hora >= 18) {
    console.log("Boa noite")
} else{
    console.log("Hora invalida")
}

// if pode ser usado sozinho
// sempre que uso else, preciso do if antes
// posso ter varios ifs (nao recomendado)
// apenas um else na checagem
// podemos usar varios else if -> mais recomendado 'switch'


const numero = 14

if (numero >= 0 && numero <= 5) {
    console.log("Numero é maior que zero e menor que 5")
} else {
    console.log("Numero fora do range de 0 a 5")
}