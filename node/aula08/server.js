const express = require('express')
const app = express()

app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.send('<form action="/" method= "POST"> Nome do cliente: <input type="text" name="nome"> <button> Enviar </buttom> </form>')
})

app.get('/testes/:idUsuarios?/:parametro?', (req, res) => {
    // profiles/1
    //profiles/?chave1=valor1&chave2=valor2
    
    console.log(req.params)
    console.log(req.query)
    res.send(req.params.idUsuarios)
})  
 
app.post('/', (req, res) => {
    console.log(req.body)
    res.send(`O que voce me enviou foi ${req.body.nome}`)
}) 

app.listen(3333, () => {
    console.log(`Acessar http://localhost:3333`)
    console.log(`servidor executando na porta 3333`)
})


/*
        CRIAR   LER   ATUALIZAR    APAGAR
CRUD -> CREATE, READ, UPDATE,     DELETE
         POST,  GET   PUT         DELETE
*/
