
function rand(min, max){
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo){
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof msg !== `string`) {
                reject(`dado invalido`)
                return
            }
            resolve(msg)
            return
        }, tempo)
    })
}

let emCache = false


function baixaPagina(){
    
    if(emCache){
        return Promise.resolve(`Pagina em Cache`)
    }else {
        return esperaAi(`baixei a pagina`, 3000)
    }
}

/*
function baixaPagina(){
    let emCache = false

    if(emCache){
        return Promise.reject(`Pagina em Cache`)
    }else {
        emCache = true
        return esperaAi(`baixei a pagina`, 3000)
    }
}

*/
baixaPagina()
.then(dadosPagina => {
    console.log(dadosPagina)
    emCache = true
    return baixaPagina()
})
.then(dadosPagina => {
    console.log(dadosPagina)
})
.catch(e => console.log(e))


/*

const promises = [ 
    esperaAi(`promise 1`, rand(1, 5)),
    esperaAi(`promise 2`, rand(1, 5)),
    esperaAi(`promise 3`, rand(1, 5)),
]


Promise.race(promises)
 .then(valor => {
    console.log(valor)
 })
 .catch(erro => {
    console.log(erro)
 })
*/


 /*

 
const promises = [ 
    esperaAi(`promise 1`, rand(1, 5)),
    esperaAi(`promise 2`, rand(1, 5)),
    esperaAi(`promise 3`, rand(1, 5)),
]

Promise.all(promises)
.then(valor => {
   console.log(valor)
})
.catch(erro => {
   console.log(erro)
})
   */