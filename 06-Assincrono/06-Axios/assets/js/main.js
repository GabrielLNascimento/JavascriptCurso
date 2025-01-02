// fetch("pessoas.json")
//     .then(res => res.json())
//     .then(json => carregaDados(json))
//     .catch(err => console.error(err))

axios("pessoas.json")
    .then(resposta => carregaDados(resposta))
    .catch(err => console.error(err))

function carregaDados(arr) {
    const container = document.querySelector(".resultado")
    const table = document.createElement("table")
    
    for (let pessoa of arr) {
        const tr = document.createElement("tr")
        
        let td1 = document.createElement("td")
        td1.textContent = pessoa.nome
        tr.appendChild(td1)

        let td2 = document.createElement("td")
        td2.textContent = pessoa.email
        tr.appendChild(td2)

        let td3 = document.createElement("td")
        td3.textContent = pessoa.idade
        tr.appendChild(td3)

        table.appendChild(tr)
    }  
    container.appendChild(table)
}