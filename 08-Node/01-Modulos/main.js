// para importar
// usando caminho relativo:
const mod1 = require('./mod1.js')
// objeto normal do javascript

console.log(mod1.nome)
console.log(mod1.EuSouThis)
console.log(mod1.falaOi())


// importando apenas algo
const falaOii = require("./mod1.js").falaOi
console.log(falaOii())


// posso importar por desetruturação
const { nome, sobrenome } = require("./mod1.js")
console.log(nome, sobrenome)


// importando classe
const { Pessoa } = require("./Pessoa.js")
const p1 = new Pessoa("Gabriel", "Liz")
console.log(p1)


// usando modulo padrão do node
const path = require("path")


// usando modulos instalando eles
// npm i axios
const axios = require("axios")
axios('https://viacep.com.br/ws/01001000/json/')
    .then(res => {
        console.log(res.data)
    })
    .catch(err => console.log(err))