import geraSenha from "./geradores"

const senhaGerada = document.querySelector(`.senha-gerada`)
const qtdCarac = document.querySelector(`.qtd`)
const chkMais = document.querySelector(`.adLetraMais`)
const chkMinu = document.querySelector(`.adLetraMinus`)
const chkNum = document.querySelector(`.adNum`)
const chkSim = document.querySelector(`.adSimbolos`)
const gerarSenha = document.querySelector(`.gerar-senha`)

export default () => {
   gerarSenha.addEventListener(`click`, () => {
    senhaGerada.innerHTML = gera()
   })
}

function gera(){
    const senha = geraSenha(qtdCarac.value, chkMais.checked, chkMinu.checked, chkNum.checked, chkSim.checked)
    console.log(senha)
    return senha || `Nada Selecionado`
}
