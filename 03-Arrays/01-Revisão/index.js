const nomes = [10, 20, 30, 40, 50, 60]

// alterando dados
nomes[2] = 66
console.log(nomes)


// deletando dados
delete nomes[0] // deixo em branco
console.log(nomes)
nomes[0] = 10


// vai deletar nos dois arrays
const novoArray = nomes
const ultimo = novoArray.pop()
console.log(nomes, novoArray, ultimo)

// deletando inicio
const removido = nomes.shift()
console.log(nomes)


// adicionar coisas no array
nomes.push(99)
console.log(nomes)

// adicionar no inicio
nomes.unshift(5)
console.log(nomes)


// fatiando array, desconsidera o ultimo elemento
console.log(nomes.slice(2, 4))