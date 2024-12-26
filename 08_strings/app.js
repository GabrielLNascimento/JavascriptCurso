// indices       01234567
let umaString = "45 Um 7 texto 123"

console.log(umaString[3]) // t
console.log(umaString.charAt(3)) // t

console.log(umaString.concat(" ola", " ", "tudo", " ", "bem?"))

console.log(umaString.match(/\d+/g))
console.log(umaString.match(/\d+/g).join(""))

console.log(umaString.length)

// vai mostrar onde está o index
console.log(umaString.indexOf("texto"))

// mostra -1 caso nao seja encontrado
console.log(umaString.indexOf('javascript'))

// começa a procurar de tras pra frente
console.log(umaString.lastIndexOf("texto"))

// substiuir algo por outro
console.log(umaString.replace("123", "456"))

// cortar a string
console.log(umaString.slice(3, 5)) // desconsidera o 5

// cortar string no espaço em branco e add em um array
console.log(umaString.split(" "))