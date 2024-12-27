const array = [10, 20, 30, 40, 50, 60, 70, 80]

console.log(array.slice(0, 1))
console.log(array.slice(0, 2))
console.log(array.slice(1, 2))
console.log(array.slice(1, 3))
console.log(array.slice(0, 3))
console.log(array.slice(1, array.length))
console.log(array.slice(2, array.length))
console.log(array.slice(array.length - 1, array.length))