const isLogged = true
const userRole = 'Admin'

const acesso = isLogged && userRole == 'Admin' ? "permitido" : "negado"

console.log(acesso)