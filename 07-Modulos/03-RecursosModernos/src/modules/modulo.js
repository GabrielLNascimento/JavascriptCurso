function promise() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log("Passou a promise")
            res()
        }, 2000)
    })
}

export default async function () {
    await promise()
    console.log("terminou")
}