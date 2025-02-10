/*

const nome = `luiz`
const sobrenome = `miranda`

const falaNome = () => {
    return console.log(nome, sobrenome)
};


module.exports.nome = nome;
module.exports.sobrenome = sobrenome;
module.exports.falaNome = falaNome;


exports.nome = nome
exports.sobrenome = sobrenome
exports.falaNome = falaNome
this.qualquerCoisa = `O que eu quiser exportar`

*/

//com classe = 
class Pessoa {
    constructor(nome){
        this.nome = nome
    }
}

exports.Pessoa = Pessoa