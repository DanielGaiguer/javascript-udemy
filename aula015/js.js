let span = document.querySelector ('#span')
let num = Number(window.prompt("Digite um número: "))
if (isNaN(num) ){
    window.alert ("ERRO digite um [NÙMERO]")
}
span.innerHTML += num 
document.body.innerHTML += (`Raiz quadrada: ${num ** 0.5 } <br>`)
document.body.innerHTML += (`${num} é inteiro: ${Number.isInteger(num)} <br>`)
document.body.innerHTML += (`é NaN: ${Number.isNaN(num)} <br>`)
document.body.innerHTML += (`Arredondando para baixo: ${Math.floor(num)} <br>`)
document.body.innerHTML += (`Arredondando para cima: ${Math.ceil(num)} <br>`)
document.body.innerHTML += (`Com duas casas decimais: ${num.toFixed(2)} <br>`)
