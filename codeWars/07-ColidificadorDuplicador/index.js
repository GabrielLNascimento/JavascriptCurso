/*
O objetivo deste exercício é converter uma string em uma nova string, onde cada caractere na nova string é "(" se esse caractere aparecer apenas uma vez na cadeia original, ou ")" se esse caractere aparecer mais de uma vez na cadeia de caracteres original. Ignore a capitalização ao determinar se um caractere é uma duplicata.
*/

function getDuplicate(txt) {
    const textoFormat = txt.toLowerCase()
    let novaString = ''
    for (let char of textoFormat) {
        const textoCortado = textoFormat.split(char)
        novaString += (textoCortado.length - 1) > 1 ? ")" : "("
    }    
    return novaString
}

console.log(getDuplicate("din"))
console.log(getDuplicate("recede"))
console.log(getDuplicate("Success"))

