// comando -> npm init -y
// instalar babel:
//      - npm install --save-dev @babel/cli @babel/preset-env @babel/core

const nome = 'Gabriel';
const obj = { nome };
const novoObj = { ...obj };
console.log(novoObj);

const newObject = { ...obj, idade: 20 };
console.log(newObject);

// comando para converter
// npx babel index.js -o bundle.js --presets=@babel/env

/*
configurar script para rodar sozinho
no arquivo package.json:
    "scripts": {
        "build": "babel index.js -o ./build/bundle.js --presets=@babel/env -w"
    }

-w => flag para assistir o codigo
*/


class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }
}

const p1 = new Pessoa("Gabriel", "Nunes");
console.log(p1.nomeCompleto())
