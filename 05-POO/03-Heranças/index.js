// crie uma super classe, que vai ter propriedades que vao ir em todas as classes filhas
// utilize metodos normais como constructor() -> passando os parametros
// herdar a classe utiliza a palavra chave 'extends'
// exemplo: class <Classe filho> extends <Classe Pai> { }
// quando colocar construtor na classe filho, tem que chamar as propriedades da classe pai
// utiliza o metodo "super()" -> passando os parametros dentro dos parenteses, para chamar o constructor da classe pai
// posso criar quantas classes filhos eu quiser, apenas extendendo da classe pai
// qual metodo/propriedade que eu escrever na classe filho, vai sobrescrever no da classe pai

class Employee {
    constructor(name, position, salary) {
        this.name = name
        this.position = position
        this.salary = salary
    }

    getDetails() {
        console.log(" ")
        console.log("Informações: ")
        console.log("Nome:", this.name)
        console.log("Posição:", this.position)
        console.log(`Salario: R$:${this.salary},00`)
        console.log(" ")
    }
}

class Manager extends Employee {
    constructor(name, position, salary) {
        super(name, position, salary)
        this.employees = []
    }

    addEmployee(employee) {
        if (typeof employee !== 'object') return 
        this.employees.push(employee)
    }

    getEmployees() {
        for (let employee of this.employees) {
            employee.getDetails()
        }
        return
    }
}

const p1 = new Employee("Zanela", "financeiro", 3500)
const p2 = new Employee("Thaila", "Marketing", 4300)
const p3 = new Employee("João", "Almoxarifado", 2100)


const manager = new Manager("Gabriel", "Gerente", 11000)

manager.addEmployee(p1)
manager.addEmployee(p2)
manager.addEmployee(p3)

manager.getEmployees()