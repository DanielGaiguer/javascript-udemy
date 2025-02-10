module.exports = (req, res, next) => {
    console.log(`passei no middleware global.`)
    console.log(`vi que voce postou ${req.body.cliente}`)
    req.body.cliente += ` doido`
    next()
}