let timerUsuario = document.querySelector('#timer')

let seconds = 0 
let timer; 
function getSeconds(seconds){
    const date = new Date(seconds * 1000)
    return date.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    })
}
function playTimer(){
    timer = setInterval(function(){
        seconds ++
        console.log(getSeconds(seconds))
        timerUsuario.innerHTML = getSeconds(seconds)
    }, 1000)
}
function play(){
    timerUsuario.classList.remove('pause')
    clearInterval(timer)
    playTimer()
    /*
    while(hours < 99){
        let timerHou = setInterval(function(){
            hours++
        }, 3600000)
        while (minutes < 60){
            let timerMin = setInterval(function(){
                minutes++
                console.log('minuto')
            }, 60000)

            setTimeout(function(){
                clearInterval(timerMin)
            }, 3600000)
        }
        minutes = 0
        while (seconds < 60){
            let timerSec = setInterval(function(){
                seconds++
                console.log('segundo')//vai somar o segundo
            }, 1000)
            setTimeout(function(){
                clearInterval(timerSec)
            }, 59000)
        }
        seconds = 0 
    }    */
}

function pause(){
    timerUsuario.classList.add('pause')
    setTimeout(function(){
        clearInterval(timer)
    })
}
function zerar(){
    timerUsuario.classList.remove('pause')
    setTimeout(function(){
        clearInterval(timer)
        timerUsuario.innerHTML = '00:00:00'
        seconds = 0
    })
}