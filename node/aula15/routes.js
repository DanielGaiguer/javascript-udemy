const express = require('express')
const route = express.Router()
const homeControler = require(`./src/controllers/homeController`)
const contatoController = require(`./src/controllers/contatoController`)


route.get('/', homeControler.paginaIncial)

route.post('/', homeControler.trataPost)

route.get('/contato', contatoController.paginaInicial)

module.exports = route