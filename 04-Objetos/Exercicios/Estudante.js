function Estudante(nome, curso) {
    this.nome = nome
    this.curso = curso
    this.notas = []
}

Estudante.prototype.adicionarNota = function(nota) {
    this.notas.push(nota)
}

Estudante.prototype.calcularMedia = function() {
    const tamNotas = this.notas.length
    const somaTotal = this.notas.reduce((acum, valor) => acum += valor)
    return somaTotal / tamNotas
}

const aluno = new Estudante("Gabriel", "Javascript")
aluno.adicionarNota(1)
aluno.adicionarNota(2)
aluno.adicionarNota(3)
console.log(aluno.calcularMedia())