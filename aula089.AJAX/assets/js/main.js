//CODIGO AJAX COM PROMISE(ASYNC E AWAIT)====

const request = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open(obj.method, obj.url, true)
        xhr.send()

        xhr.addEventListener(`load`, () => {
            if(xhr.status >= 200 && xhr.status < 300){
                resolve(xhr.responseText)
            }else{ 
                reject(xhr.statusText)
            }
        })
    })
}


async function carregaPagina(el){
    const href = el.getAttribute(`href`)
    
    const objConfig = {
        method: `GET`,
        url: href 
    }

    try {
        const response = await request(objConfig)
        carregaresultado(response)
    } catch(e) {
        console.log(e)
    }
    
}


document.addEventListener(`click`, e => {
    const el = e.target
    const tag = el.tagName.toLowerCase()

    if (tag === `a`){
        e.preventDefault()
        carregaPagina(el)
    }
})

function carregaresultado(response){
    const resultado = document.querySelector(`.resultado`)
    resultado.innerHTML = response 
}





//CODIGO AJAX COM PROMISE====

/*
const request = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open(obj.method, obj.url, true)
        xhr.send()

        xhr.addEventListener(`load`, () => {
            if(xhr.status >= 200 && xhr.status < 300){
                resolve(xhr.responseText)
            }else{ 
                reject(xhr.statusText)
            }
        })
    })
}


function carregaPagina(el){
    const href = el.getAttribute(`href`)
    
    const objConfig = {
        method: `GET`,
        url: href 
    }

    request(objConfig).then(response => {
        carregaresultado(response)
    }).catch(error => console.log(error))
}


document.addEventListener(`click`, e => {
    const el = e.target
    const tag = el.tagName.toLowerCase()

    if (tag === `a`){
        e.preventDefault()
        carregaPagina(el)
    }
})

function carregaresultado(response){
    const resultado = document.querySelector(`.resultado`)
    resultado.innerHTML = response 
}

*/





//CODIGO AJAX COM CALLBACK===
/*
const request = obj => {
    const xhr = new XMLHttpRequest()
    xhr.open(obj.method, obj.url, true)
    xhr.send()

    xhr.addEventListener(`load`, () => {
        if(xhr.status >= 200 && xhr.status < 300){
            obj.success(xhr.responseText)
        }else{ 
            obj.error(xhr.statusText)
        }
    })
}

document.addEventListener(`click`, e => {
    const el = e.target
    const tag = el.tagName.toLowerCase()

    if (tag === `a`){
        e.preventDefault()
        carregaPagina(el)
    }
})

function carregaPagina(el){
    const href = el.getAttribute(`href`)
    
    const objConfig = {
        method: `GET`,
        url: href,
        success(response){
            carregaresultado(response)
        },
        error(errorText){
            console.log(error)
        }
    }

    request (objConfig)
}

function carregaresultado(response){
    const resultado = document.querySelector(`.resultado`)
    resultado.innerHTML = response 
}
*/

