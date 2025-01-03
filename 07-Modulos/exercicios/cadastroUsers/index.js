import User from './modules/createUser.js';

const btnEnviar = document.getElementById('btn-enviar');

let users = [];

btnEnviar.addEventListener('click', (e) => {
    e.preventDefault();

    const nome = document.getElementById('nome');
    const senha = document.getElementById('senha');
    const email = document.getElementById('email');

    criarUser(nome, senha, email)
});

function criarUser(nome, senha, email) {
    try {
        const user = new User(nome.value, senha.value, email.value);
        user.valida();
        if(user.erros.length > 0) {
            addErros(user.erros)
            return
        }
        users.push(user)
        addUsers(users)
    } catch(err) {
        console.log(err)
    }
}

function addUsers(users) {
    const container = document.getElementById("users")
    container.textContent = ""
    for (let user of users) {
        const text = `Nome: ${user.name}, Email: ${user.email}`
        const p = criaParagrafo('p', text);
        container.appendChild(p);
    }
}

function addErros(arr) {
    const container = document.getElementById("erros")
    container.textContent = ""
    for (let erro of arr) {
        const p = criaParagrafo('p', erro);
        container.appendChild(p);
    }
}

function criaParagrafo(tag, txt) {
    const p = document.createElement(tag);
    p.innerText = txt;
    return p;
}