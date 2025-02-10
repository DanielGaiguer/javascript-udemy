
//Maneira 6 = mais padrao para classes 

export const nome = `luis`
export const sobrenome = `miranda`
export const idade = 30 

export default class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome
        this.sobrenome = sobrenome
    }
}


//Maneira 5 = 

/*
export const nome = `luis`
export const sobrenome = `miranda`
export const idade = 30 


export function soma(x, y){
    return x + y 
}
export default (x, y) => x * y//arrow function anonima

*/





//Maneira 4 = 
/*
export const nome = `luis`
export const sobrenome = `miranda`
export const idade = 30 

//pode exportar um default por arquivo, so funciona desta forma com funcoes
export default function soma(x, y){
    return x + y
}

*/



//export {nome as deafalt, sobrenome, idade, soma}

//Maneira 3 = 
/*
export const nome = `luis`
export const sobrenome = `miranda`
export const idade = 30 

export function soma(x, y){
    return x + y
}
*/




/*
//Maneira 2 = 
export const nome = `luis`
export const sobrenome = `miranda`
export const idade = 30 

export function soma(x, y){
    return x + y
}

export class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome
        this.sobrenome = sobrenome 
    }
}
*/



/*
//MANEIRA 1 = 
const nome = `luis`
const sobrenome = `miranda`
const idade = 30 

function soma(x, y){
    return x + y
}

export { nome, sobrenome as sobrenome2, idade, soma }
*/