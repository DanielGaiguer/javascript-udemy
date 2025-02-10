exports.paginaIncial = (req, res) => {
    res.send('<form action="/" method= "POST"> Nome do cliente: <input type="text" name="nome"> <button> Enviar </buttom> </form>')
}

exports.trataPost = (req, res ) => {
    res.send(`Sou sua nova rota de post`)
}