exports.middlewareGlobal = (req, res, next) => {
    res.locals.umaVariavelLocal = `Este  valor e uma variavel local`
    next()
}

exports.outroMiddleware =(req, res, next) => {
    next()
}

exports.checkCsrfError = (err, req, res, next) => {
    if (err && err.code === 'EBADCSRFTOKEN'){
        return res.send('BAD CSRF.')
    }
}

exports.csrfMidlleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken()
    next()
} 