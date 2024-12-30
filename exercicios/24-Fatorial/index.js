function fatorial(num) {
    let acum = 1
    for (let i = 1; i <= num; i++) {
        acum *= i
    }
    console.log(acum)
}
fatorial(5)