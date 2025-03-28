const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const LoginController = require('./src/controllers/loginController');
const contatoController = require('./src/controllers/contatoController');

const { loginRequired } = require('./src/middlewares/middleware')

// Rotas da home
route.get('/', homeController.index);

//Rotas de login
route.get('/login/index', LoginController.index)
route.post('/login/register', LoginController.register)
route.post('/login/login', LoginController.login)
route.get('/login/logout', LoginController.logout)

//Rotas de Contato
route.get('/contato/index', loginRequired, contatoController.index)
route.post('/contato/register', loginRequired, contatoController.register)
route.get('/contato/index/:id', loginRequired, contatoController.editIndex)
route.post('/contato/edit/:id', loginRequired, contatoController.edit)
route.get('/contato/delete/:id', loginRequired, contatoController.delete)

module.exports = route;