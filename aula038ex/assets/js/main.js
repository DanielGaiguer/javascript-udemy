const paragrafos = document.querySelector('.paragrafos')
const ps = paragrafos.querySelectorAll('p')

const styleBody = getComputedStyle(document.body)
const backgroundColorBody = styleBody.backgroundColor

for (p of ps){
    p.style.backgroundColor = backgroundColorBody
    p.style.color = 'white'
}