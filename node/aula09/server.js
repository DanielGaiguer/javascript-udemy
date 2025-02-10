const express = require('express')
const app = express()
const routes = require('./routes')

app.use(express.urlencoded({extended: true}))
app.use(routes)

app.listen(3333, () => {
    console.log(`Acessar http://localhost:3333`)
    console.log(`servidor executando na porta 3333`)
})


/*
        CRIAR   LER   ATUALIZAR    APAGAR
CRUD -> CREATE, READ, UPDATE,     DELETE
         POST,  GET   PUT         DELETE
*/
