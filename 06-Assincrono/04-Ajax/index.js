// criar uma variavel para armazenar "new XMLHttpRequest()"
/*
- utiliza o metodo open() para configurar a requisição
    -> open(metodo, url, assincrono?)
        - metodo: GET, POST, PUT, DELETE
        - url: url padrão vindo do objeto de configuração
        - assincrono: true se quiser ser true
    -> preciso enviar os dados, apenas passando o metodo .send()
    -> adicionar um evento de "load"
    -> verificar o status: 200 - success 
    -> em caso de sucesso, cria uma chave do objeto chamada success, e passa como parametro a resposta vindo da requisição (responseText)
    -> em caso de erro, cria uma chave de error, passando o (statusText) como parametro
*/ 

const request = (obj) => {
    return new Promise((res, rej) => {
        const xhr = new XMLHttpRequest()
        xhr.open(obj.method, obj.url, true)
        xhr.send()

        xhr.addEventListener("load", () => {
            if (xhr.status >= 200 && xhr.status <= 300) {
                res(xhr.responseText)
            } else {
                rej(xhr.statusText)
            }
        })
    })
    
}

document.addEventListener('click', e => {
    e.preventDefault()

    // capturando o elemento que estou clicando
    const el = e.target

    // pegando a tag do elemento
    const tag = el.tagName.toLowerCase();

    if(tag === 'a') {
        carregaPagina(el)
    }
})

function carregaPagina(el) {
    const href = el.getAttribute('href')
    
    const objConfig = {
        method: "GET",
        url: href
    }
    
    request(objConfig)
        .then(res => {
            carregaResultado(res)
        })
        .catch(err => console.log(err))
    
}

function carregaResultado(res) {
    const container = document.querySelector(".resultado")
    container.innerHTML = res
}