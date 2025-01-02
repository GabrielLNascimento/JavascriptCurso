class Generate {
    static id = 0

    static incrementId() {
        return this.id += 1
    }
}

console.log(Generate.incrementId())
console.log(Generate.incrementId())
console.log(Generate.incrementId())
console.log(Generate.incrementId())