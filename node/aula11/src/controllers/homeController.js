exports.paginaIncial = (req, res) => {
    res.render('index')
}

exports.trataPost = (req, res ) => {
    res.send(`Sou sua nova rota de post`)
}