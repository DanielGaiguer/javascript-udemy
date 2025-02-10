const express = require('express')
const route = express.Router()
const homeControler = require(`./controllers/homeController`)
const contatoController = require('./controllers/contatoController')

route.get('/', homeControler.paginaIncial)
route.post('/', homeControler.trataPost)

route.get('/contato', contatoController.paginaInicial)

module.exports = route