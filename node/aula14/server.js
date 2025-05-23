require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
 
mongoose.connect(process.env.CONNECTIONSTRING)
 .then(() => {
    console.log(`conectei a base de dados`)
    app.emit('pronto')
 }).catch(e => console.log(e))

const routes = require('./routes')
const path = require('path')
const meuMiddleware = require(`./src/middlewares/middleware`)
//const { default: mongoose } = require('mongoose')

app.use(express.urlencoded({extended: true}))
app.use(express.static(path.resolve(__dirname, 'public')))

app.set('views', path.resolve(__dirname, `src`, 'views'))
app.set('view engine', 'ejs')

//Nossos proprios middlewares
app.use(meuMiddleware)
app.use(routes)

app.on('pronto', () => {
    app.listen(3333, () => {
        console.log(`Acessar http://localhost:3333`)
        console.log(`servidor executando na porta 3333`)
    })
})


 
/*
        CRIAR   LER   ATUALIZAR    APAGAR
CRUD -> CREATE, READ, UPDATE,     DELETE
         POST,  GET   PUT         DELETE
*/
