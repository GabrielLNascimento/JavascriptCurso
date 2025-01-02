function filterData(arr) {
    return new Promise((res, rej) => {
        if (!arr) {
            rej("Array inválido")
        }
        const pares = arr.filter((num) => num%2 == 0)
        return res(pares)
    })
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8]

filterData(numeros)
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })