const caracteres = 'abcdefghijklmnopqrstuvwxyz1234567890-+!@#$&*';

let senha = ""

export default function geraNum() {
    senha = ""
    const indice = caracteres.length;
    for (let i = 0; i <= 10; i++) {
        const indSenha = Math.floor(Math.random() * indice);
        senha += caracteres[indSenha]
    }
    return senha
}

