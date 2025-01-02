function compareTriplets(a, b) {
    let [al, bo] = [0, 0]
    for (let i = 0; i < 3; i++) {
        if (a[i] == b[i]) continue
        a[i] > b[i] ? al++ : bo++
    }
    return [al, bo]
}
const al = [5,6,7]
const bo = [3,6,10]
console.log(compareTriplets(al, bo))