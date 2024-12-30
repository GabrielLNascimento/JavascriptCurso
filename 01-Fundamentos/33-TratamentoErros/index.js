// vai gerar um erro -> nao está definida
// console.log(NaoExisto)
// index.js:2 -> aparece a linha em que ocorreu o erro

// try -> tentar fazer algo
// catch -> realizar algo por ter dado erro no 'try'

try {
    console.log(NaoExisto)
} catch (err) {
    console.log("Variavel indefinida")
    // console.log(err)
    // nao é correto a gente expor erros ao nosso usuario
}


function soma(x, y) {
    if (
        typeof x !== 'number' || 
        typeof y !== 'number'
    ) {
        throw new TypeError('x ou y estão com tipos errados')
    }

    return x + y
}

try {
    // console.log(soma("a", 2))
    console.log(soma(1, 2))
} catch(err) {
    console.log(err) // vai chamar o throw da função soma
}


try {
    // açoes do mundo real
    console.log(a)
    console.log("Abri um arquivo")
    console.log("Manipulei o arquivo e gerou erro")
    console.log("Fechei o arquivo")
} catch(err) {
    console.log("Tratando o erro")
} finally {
    // com ou sem erro, vai ser executado
    console.log("Sempre sou executado")
}


function retornaHora(data) {
    if (!(data instanceof Date) && data) {
        throw new TypeError("Esperando instancia de 'Date'")
    }

    if (!data) {
        data = new Date()
    }

    return data.toLocaleTimeString("pt-br", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    })
}

const data = new Date('01-03-1980 20:32:12')
console.log(retornaHora(data))

