// Array seria uma lista de coisas
// quando quero ter varios valores dentro de uma variavel
// coloco dentro de um colchetes
// importante deixar ele conciso, com um tipo de dado

// indices    0123456
const nome = "Gabriel"

// indexados por elemento
// indices         0          1        2
const nomes = ["Gabriel", "Emilly", "Zanela"]

console.log(nomes)

// comparando string com os itens do array
console.log(nome[1], nomes[1])


// armazanando em variavel
nomeEmilly = nomes[1]
console.log(nomeEmilly)


//editar valores
nomes[2] = "João"
console.log(nomes)


// adicionar elementos no array
nomes[3] = "Novo aluno"
console.log(nomes)


// caso ele não exista, ele cria esse indice novo
// eu posso adicionar em qualquer indice que eu quiser
// os outros elementos estariam vazios
// nomes[10] = "teste"
// console.log(nomes)


// utilizando propriedade length
console.log(nomes.length) // tamanho do array

// nomes[nomes.length] = "A"
// nomes[nomes.length] = "B"
// nomes[nomes.length] = "C"

// console.log(nomes)


// função que adiciona sozinha no final
nomes.push("José") // add no final do elemento
console.log(nomes)


// adicionando no começo
// seria ruim, pq teria q mover todos os elementos para o lado
// requer processamento
nomes.unshift("Jesus") // add no indice zero
console.log(nomes)

// remove o ultimo elemento, retorna a variavel tirada
const alunoTirado = nomes.pop()
console.log(nomes, alunoTirado)


// vai remover o primeiro elemento da lista
const alunoTirado2 = nomes.shift()
console.log(nomes, alunoTirado2)


// fatiando array -> mesma em string 
// desconsidera o 2
console.log(nomes.slice(0, 2))
// vai até o final, desconsiderando ele
console.log(nomes.slice(0, -1))

// vendo o tipo do array
console.log(typeof nomes)

// verificando se uma variavel é um array
console.log(nomes instanceof Array)

