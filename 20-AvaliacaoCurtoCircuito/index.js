/*
Operadores lógicos
&& -> todas precisam ser verdadeiras, para retornar verdadeiro
|| -> pelo menos uma precisa ser verdadeira, para retornar verdadeiro
*/

/*
se encontrei apenas um false, parei de checar o resto da condição
false && true -> false
*/

// exemplo
console.log("Gabriel Liz" && 0 && "Emilly")
//              true       false   true

// retorna o numero zero, por que encontrou o false
// se todas forem true, ele retorna o ultimo valor
console.log("Gabriel Liz" && true && "Emilly")


// VALORES QUE AVALIAM COMO FALSE
/*
- false
- 0
- "" '' ``
- null 
- undefined
- NaN
*/
// qualquer coisa diferente disso, avalia como TRUE

console.log("Gabriel" && "Emilly")
console.log("Gabriel" && "Emilly")


// exemplo na pratica
function falaOi() {
    return 'Oi'
}

const vaiExecutar = false
vaiExecutar && console.log(falaOi())

// vai me retornar o primeiro valor que avaliar como true
console.log(0 || false || null || "Gabriel" || true)


// exemplo na pratica
// caso nao venha um valor na variavel
const nome = ""
console.log(nome || "Sem nome")

const corUsuario = null
const corPadrao = corUsuario || "preto"
// caso o usuario nao passar a cor, ele usa a cor padrão preto
console.log(corPadrao)
