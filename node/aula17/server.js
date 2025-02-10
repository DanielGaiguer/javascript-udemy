require('dotenv').config()

const express = require('express')
const app = express()

const mongoose = require('mongoose')
mongoose.connect(process.env.CONNECTIONSTRING)
 .then(() => {
    console.log(`conectei a base de dados`)
    app.emit('pronto')
 }).catch(e => console.log(e))

const session = require('express-session')
const MongoStore = require('connect-mongo')
const flash = require('connect-flash')
const routes = require('./routes')
const path = require('path')
const helmet = require('helmet') 
const csrf = require('csurf')
const {middlewareGlobal, checkCsrfError, csrfMidlleware} = require(`./src/middlewares/middleware`)

app.use(helmet())
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'public')))

const sessionOptions = session({
    secret: 'hfhfghfgh',
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave: false, 
    saveUninitialized : false, 
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7 ,
        httpOnly: true
    }
})
app.use(sessionOptions)
app.use(flash())


app.set('views', path.resolve(__dirname, `src`, 'views'))
app.set('view engine', 'ejs')

//Nossos proprios middlewares
app.use(csrf())
app.use(middlewareGlobal)
app.use(checkCsrfError)
app.use(csrfMidlleware)
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
