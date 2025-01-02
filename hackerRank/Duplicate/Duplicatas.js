function findDuplicate(arr) {
    const map = new Map()
    let duplicates = []
    for (let i in arr) {
        if (map.has(arr[i])) {
            duplicates.push(arr[i])
            continue
        }
        map.set(arr[i], i)
    }
    return duplicates
}
console.log(findDuplicate([4, 3, 2, 7, 7, 8, 2, 3, 1]))