/*window.onload = function(){
  
    let res = document.querySelector("#res")
    const data = new Date()
    let diaSemanaNum = data.getDay()
    let diaSemana = diaString(diaSemanaNum)
    let mesNum = data.getMonth()
    let mes = mesString(mesNum)
    res.innerHTML += `${diaSemana}, ${data.getDate()} de ${mes} de ${data.getFullYear()}<br>${ zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`
    function diaString(){
        switch(diaSemanaNum){
            case 0 :
                return 'Domingo'
            case 1 :
                return 'Segunda-feira'
            case 2 :
                return 'Terça-feira'
            case 3 :
                return 'Quarta-feira'
            case 4 :
                return 'Quinta-feira'
            case 5 :
                return 'Sexta-feira'
            case 6 :
                return 'Sábado'
        }
    }
    function mesString(){
        switch(mesNum){
            case 0 : 
                return 'Janeiro'
            case 1 : 
                return 'Fevereiro'
            case 2 : 
                return 'Março'
            case 3 : 
                return 'Abril'
            case 4 :
                return 'Maio'
            case 5 : 
                return 'Junho'
            case 6 : 
                return 'Julho'
            case 7 : 
                return 'Agosto'
            case 8 : 
                return 'Setembro'
            case 9 : 
                return 'Outubro'
            case 10 : 
                return 'Novembro'
            case 11 : 
                return 'Dezembro'
        }
    }
    function zeroAEsquerda(num){
        return num >= 10 ? num : `0${num}`
    }
}
*/
   const h1 = document.querySelector("#res")
    const data = new Date()
    h1.innerHTML = data.toLocaleString('pt-BR', { dateStyle: 'full', timeStyle: 'short' })