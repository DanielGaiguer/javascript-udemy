/*
const HomeModel = require('../models/HomeModel')

HomeModel.create({ //find() para pesquisar 
    titulo: `Um titulo de testes`,
    descricao: `Uma descricao de testes`
})
    
 .then(dados => console.log(dados))
 .catch(e => console.log(e))
*/

exports.paginaIncial = (req, res ) => {
    res.render('index')

}

exports.trataPost = (req, res ) => {
    res.send(req.body)
}