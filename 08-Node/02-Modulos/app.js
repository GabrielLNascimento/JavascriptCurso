const soma = require('./modules/mod');
console.log(soma(1, 2));

console.log(__filename); // caminho do arquivo
console.log(__dirname); // caminho da pasta do arquivo

const path = require('path');

// pasta do arquivo
console.log(path.resolve(__dirname))

// voltar duas pastas para tras
console.log(path.resolve(
    __dirname, "..", ".."
))

// adicionar arquivos
console.log(path.resolve(
    __dirname, "teste.txt"
))

// voltar para tras e add uma pasta
console.log(path.resolve(
    __dirname, "..", "teste"
))
