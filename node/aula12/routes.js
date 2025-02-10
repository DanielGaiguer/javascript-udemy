const express = require('express')
const route = express.Router()
const homeControler = require(`./src/controllers/homeController`)


route.get('/', homeControler.paginaIncial)
route.post('/', homeControler.trataPost)



module.exports = route