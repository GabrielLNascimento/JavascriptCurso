const btnEnviar = document.getElementById("btn-enviar")

btnEnviar.addEventListener('click', async e => {
    e.preventDefault()
    const input = document.getElementById('search-cep')
    const cepFormat = input.value.replace(/\D/g, '')
    const cep = await fetchCep(cepFormat)
    if (cep) carregaDados(cep)
})

async function fetchCep(cep) {
    try {
        const url = `https://viacep.com.br/ws/${cep}/json/`
        const response = await fetch(url)
        if (response.status !== 200) throw new Error("Erro ao buscar cep") 
        const json = await response.json()
        return json
    } catch(err) {
        console.log(err)
    }
}

function carregaDados(cep) {
    const container = document.getElementById("resultado")
    container.textContent = ""
    const p = document.createElement("p")
    p.textContent = `
        ${cep.logradouro}, ${cep.bairro} - ${cep.localidade} | ${cep.estado} (${cep.uf})
    `
    container.appendChild(p)
}