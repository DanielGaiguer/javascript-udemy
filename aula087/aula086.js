
function rand(min= 0 , max = 3){
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo){ 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof msg !== `string`) {
                reject(`cai no erro`)
                return
            }
            resolve(msg)
            return
        }, tempo)
    })
}


async function executa() {
    esperaAi(`fase 3`, rand())
}


 

esperaAi(`fase 1`, rand(0, 3) )
.then(valor => {
    console.log(valor)
    return esperaAi(`fase 2`, rand())
})
.then(fase => {
    console.log(fase)
    return esperaAi(`fase 3`, rand())
})
.then(valor => {
    console.log(valor)
})
.catch( e => console.log(e))
