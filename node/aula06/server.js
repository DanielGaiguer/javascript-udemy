const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('<form action="/" method= "POST">Hello, World <button> Enviar </buttom> </form>')
})

app.get('/contato', (req, res) => {
    res.send(`Obrigado por entrar em contato com a gente`)
})

app.post('/', (req, res) => {
    res.send(`recebi o formulario`)
})
app.listen(3333, () => {
    console.log(`Acessar http://localhost:3333`)
    console.log(`servidor executando na porta 3333`)
})