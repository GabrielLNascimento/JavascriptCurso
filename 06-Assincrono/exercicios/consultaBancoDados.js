function queryDataBase(str) {
    return new Promise((res, rej) => {
        if (!str) rej("Erro ao consultar")
        console.log("Chamando...")
        
        setTimeout(() => {
            console.log("Encontrado")
            res("Dado encontrado com sucesso")
        }, 2000)
    })
}

queryDataBase("teste")
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })