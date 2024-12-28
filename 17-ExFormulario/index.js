const arrays = document.getElementById("arrays-container")
console.log(arrays)

document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o comportamento padrão de recarregar a página
    
    // Coleta os dados do formulário
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const peso = document.getElementById('peso').value;
    const profissao = document.getElementById('profissao').value;
    
    // Exibe os dados do formulário no console (pode ser substituído por outra lógica)
    const pessoa = criaPessoa(nome, idade, peso, profissao)
    arrays.innerHTML += `${pessoa.nome} ${pessoa.idade} ${pessoa.peso} ${profissao} </br>`
    
});

function criaPessoa(nome, idade, peso, profissao) {
    return {
        nome, idade, peso, profissao
    }
}