function ClassificaNota(nota) {
    return nota > 80 ? "A" :
        nota > 60 ? "B" :
        nota > 40 ? "C" :
        nota > 20 ? "E" : 
        nota > 0 ? "F" : null
}

console.log(ClassificaNota(100))
console.log(ClassificaNota(70))
console.log(ClassificaNota(50))
console.log(ClassificaNota(30))
console.log(ClassificaNota(15))
console.log(ClassificaNota(5))
console.log(ClassificaNota(-1))