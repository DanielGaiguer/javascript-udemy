

const texto = `
Joao e Maria eram grandes amigos.  
Um dia, Joao encontrou Maria na praça.  
"Oi Maria!", disse Joao sorrindo.  
Mas no meio da conversa apareceu João, o mais quieto do grupo.  
Joaaaaao não parava de falar e Maria ria sem parar.  
Alguns chamavam Mariaaaaa só para brincar.  
Certa vez, Joao escreveu errado o nome e ficou assim: Jooooooooooaooooooooooooooooo.  
E na festa da escola, Maria e Joaaaaaaooooooo dançaram juntos.  
`

const arquivos = [
  'foto1.jpg',
  'foto2.JPG',
  'imagem.JPEG',
  'selfie.jprg',
  'paisagem.png',
  'icone.PNG',
  'documento.txt',
  'relatorio.TXT',
  'dados.csv',
  'musica.mp3',
  'video.MP4',
  'cartaz.jpeg',
  'desenho.JpG',
  'scan.JpEg',
  'anotacoes.txT'
]

const alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz © ¡ 0123456789 ¡'

const html = '<p>Ola mundo</p> <p>Ola de novo</p> <div>Sou uma div!</div>'

const cpfs = `
094.860.869-23 917.882.779-53
`
const ips = `0.0.0.0 255.255.255.25510.5.12.1`

const cpfs2 = `
094.860.869-23
917.882.779-53
040.348.989-09
`

const html2 = `<p 
data-teste='teste' 
class="teste teste">
Ola mundo
</p> <p>Ola de novo</p>
 <div>Sou uma div!</div>`

module.exports = {
    texto,
    arquivos,
    html,
    html2,
    alfabeto,
    cpfs,
    ips, 
    cpfs2
}