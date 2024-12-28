// estrutura
// (condicao) ? True : False
// nao é nescessario os parenteses

// uso comum
const pontuacaoUsuario = 40

// if (pontuacaoUsuario > 60) {
//     console.log("Usuario vip")
// } else {
//     console.log("Usuario comum")
// }

const tipoUsuario = pontuacaoUsuario > 60 ? "Usuario Vip" : "Usuario Comum"
console.log(tipoUsuario)

// utilizando operador logico
const tipoUsuario2 = (pontuacaoUsuario > 60 && "Usuario Vip") || "Usuario Comum"
// caso a condição der true, ele avalia sempre o ultimo, então retorna "Usuario vip"
// caso a condição der false, a condicao interia usando o operaod "&&" retorna false
// sendo assim como a string "Usuario Comum" avalia como true, ele retorna essa propria string
console.log(tipoUsuario2)