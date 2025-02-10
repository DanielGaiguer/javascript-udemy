const fs = require(`fs`).promises

module.exports = (caminho, dados) => {
    fs.writeFile(caminho, dados, {flag: `w`})
}


/*
fs.writeFile(caminhoArquivo, `Frase1\n`, {
    flag: `a`
})*/