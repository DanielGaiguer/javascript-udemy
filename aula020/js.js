    let nome = document.querySelector ("#inome")
    let sobre = document.querySelector ("#isobre")
    let peso = document.querySelector ("#ipeso")
    let altura = document.querySelector("#ialtura")
    let res = document.querySelector ("#res")
    console.log (peso)
function enviar( ){   
    let dados = {
        nome: nome.value , 
        sobre: sobre.value , 
        peso: Number(peso.value) , 
        altura: Number(altura.value) }
        res.innerHTML += (`${dados.nome} ${dados.sobre} ${dados.peso} ${dados.altura} <br> `)
}