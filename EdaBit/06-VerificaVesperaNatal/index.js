const Natal = (date) => {
    const dataPadrao = new Date(0, 11, 25)
    return date.getDate() === (dataPadrao.getDate() - 1) &&
        date.getMonth() === (dataPadrao.getMonth()) ? true : false
}

console.log(Natal(new Date(0, 11, 20)))
console.log(Natal(new Date(0, 3, 24)))
console.log(Natal(new Date(0, 11, 24)))

