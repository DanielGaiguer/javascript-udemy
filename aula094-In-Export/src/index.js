//Maneira 6 = mais padrao para classes 

import Pessoa, { nome, sobrenome } from './modulo1' //voce pode dar outro nome inves de Pessoa, que vai funcionar 

const p1 = new Pessoa(nome, sobrenome)
console.log(p1)




//Maneira 5 = 

/*
import multiplica, {nome, sobrenome, idade, soma} from './modulo1.js' //default com exports padrao 

console.log(multiplica)
console.log(nome, sobrenome, idade, soma(2, 9))
*/





//Maneira 4 = 
/*
import funcaoDafault from './modulo1.js'//Quando nao esta entre chaves, e por que e uma variavel default
//import nomeDefault from './modulo1.js' //Agora o default e uma constante 
console.log(funcaoDafault(5, 5))
*/




//Maneira 3 = 

/*
import * as MeuModulo from './modulo1.js'
 
console.log(MeuModulo)
*/




//Maneira 2 = 
/*
import {nome, sobrenome, idade, soma, Pessoa } from './modulo1.js'

const p1 = new Pessoa(`Luiz`, `Otavio`)
console.log(p1)
*/




//MANEIRA 1 = 
/*
import {nome as nome2, sobrenome2, idade, soma} from './modulo1.js'

const nome = `joao`
console.log( nome2, sobrenome2, idade)
console.log(soma(2, 5))
*/