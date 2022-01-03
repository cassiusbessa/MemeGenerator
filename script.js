const input = document.getElementById('text-input');
const fraseMeme = document.getElementById('meme-text');
const upImage = document.getElementById('meme-insert');
let  divImage = document.getElementById('meme-image');
const memeContainer = document.getElementById("meme-image-container") 
const botoes = document.getElementsByClassName('botao')
const miniaturas = document.getElementById('miniaturas')


input.addEventListener('input', function() { 
    let entrada = input.value
    fraseMeme.innerText = entrada
})

// https://dev.to/shantanu_jana/how-to-preview-image-before-uploading-in-javascript-1f6g

// Sugestão Paula Ribeiro
upImage.addEventListener('change', upLoadImage)
function upLoadImage() {    
    let url = URL.createObjectURL(upImage.files[0]);
    divImage.src = url
}

for (let index = 0; index < botoes.length; index += 1) {
    botoes[index].addEventListener('click', trocaBorda)    
}
function trocaBorda(event) {
    for (let index = 0; index < botoes.length; index += 1) {
        let click = event.target.id;
        memeContainer.className = "";
        memeContainer.classList.add(click);
    }     
}

miniaturas.addEventListener('click', memeDefault)

// Sugestão de Paula Ribeiro
function memeDefault(event) {
    if (event.target != event.currentTarget) {
    let src = event.target.getAttribute('src')
    divImage.src = src
}
    
}


 




