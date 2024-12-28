let a = 'A';
let b = 'B';

[a, b] = [b, a]
console.log(a, b)


const arrayNumeros = [10, 20, 30, 40, 50]
const pessoa = { name: "Gabriel", age: 17 }

const [ ,second, , fourth] = arrayNumeros
console.log(second, fourth)

const [first, , tirth] = arrayNumeros
console.log(first, tirth)

const [num1, ...rest] = arrayNumeros
console.log(num1, rest)

const {name, age} = pessoa
console.log(name, age)

const {name: MyName} = pessoa
console.log(MyName)

const {city = "Unknow"} = pessoa
console.log(city)