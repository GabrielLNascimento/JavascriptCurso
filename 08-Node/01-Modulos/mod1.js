const nome = 'Gabriel';
const sobrenome = 'Liz';

const falaNome = () => console.log(nome, sobrenome)

// objeto do node -> module
// console.log(module)
// possui uma chave (exports) => que seria outro objeto

// exportando algo 
// module.exports.nome = nome

// agora o objeto exports -> tem a chave nome com o valor da variavel nome
// console.log(module)


// para nao precisar digitar 'module.exports'
// posso usar apenas 'exports'

// exatamente a mesma coisa
exports.nome = nome

const falaOi = () => "OII"
exports.falaOi = falaOi

// usando a palavra 'this' para exportar
// this se refere ao objeto do node -> exports
this.EuSouThis = "Olaaa"

exports.sobrenome = sobrenome

// console.log(module)

// const idade = 17
// const peso = 66
// exportando objetos:
// module.exports = {
//     idade, peso
// }