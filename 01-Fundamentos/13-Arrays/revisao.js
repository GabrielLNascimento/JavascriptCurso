const arrays = [10, 20, 30, 40, 50]

// mostrar na tela elementos especificos
console.log(arrays[2])
console.log(arrays[arrays.length - 1])
console.log(arrays[arrays.length - 3])

// adicionar elementos novos
arrays.push(60)
arrays.unshift(5)
console.log(arrays)


// remover elementos
let ultimoRemovido = arrays.pop()
let primeiroRemovido = arrays.shift()
console.log(arrays, ultimoRemovido, primeiroRemovido) 


// remover no começo e adicionar no final
arrays.push(arrays.shift())
console.log(arrays)

// remover no final e adicionar no começo
arrays.unshift(arrays.pop())
console.log(arrays)


// fatiando arrays
console.log(arrays.slice(0, 3))
console.log(arrays.slice(1, 5))
console.log(arrays.slice(1, arrays.length))
console.log(arrays.slice(arrays.length - 2, arrays.length))