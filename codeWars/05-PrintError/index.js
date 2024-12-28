function printerError(string) {
    let errors = 0

    for (let char of string) {
        errors += char > 'm' ? 1 : 0
    }

    return `${errors}/${string.length}`
}

console.log(printerError("aaabbbbhaijjjm"))
console.log(printerError("aaaxbbbbyyhwawiwjjjwwm"))
