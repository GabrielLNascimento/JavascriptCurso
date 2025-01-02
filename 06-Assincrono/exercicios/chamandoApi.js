function fetchData(tempo) {
    return new Promise((res, rej) => {
        if (tempo >= 2000) {
            res("Dados enviados")
        }

        rej("Erro ao enivar o dado")    
    })
}

fetchData(3000)
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })