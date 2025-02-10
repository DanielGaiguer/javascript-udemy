exports.middlewareGlobal = (req, res, next) => {
    res.locals.umaVariavelLocal = `Este  valor e uma variavel local`
    next()
}

exports.outroMiddleware =(req, res, next) => {
    next()
}