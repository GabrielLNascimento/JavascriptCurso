document.addEventListener('click', e => {
    e.preventDefault()

    const el = e.target
    const tag = el.tagName.toLowerCase();

    if(tag === 'a') carregaPagina(el)
})

async function carregaPagina(el) {
    try {
        const href = el.getAttribute('href')
    
        const response = await fetch(href)
    
        if (response.status !== 200) throw new Error("Erro 404!")
        
        const html = await response.text()
        carregaResultado(html)
    } catch(err) {
        console.log(err)
    }


    // fetch(href)
    //     .then(res => res.text())  
    //     .then(res => carregaResultado(res))
    //     .catch(err => console.error(err))  
}

function carregaResultado(res) {
    const container = document.querySelector(".resultado")
    container.innerHTML = res
}



// fetch("./paginas/pagina4.html")
//     .then(res => {
//         if(res.status !== 200) throw new Error("Erro ao carregar pagina")

//         return res.text()
//     })
//     .then(res => {
//         console.log(res)
//     })
//     .catch(err => console.error(err))