import 'core-js/stable'
import 'regenerator-runtime/runtime'

import Login from './modules/Login'

const login = new Login('.form-login')
const cadastro = new Login('.form-cadastro')

login.init()
cadastro.init()


import Contato from './modules/Contato'

const contato = new Contato('.form-contato')

contato.init()


// import './assets/css/style.css'
