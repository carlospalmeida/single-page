// configuração do lightbox
lightbox.option({
    'imageFadeDuration': 300,
    'disableScrolling': true,
    'fadeDuration' : 300,
    'albumLabel' :"Foto %1 de %2",
    'resizeDuration': 450
    
})

//inicializador do plugin aos animation
AOS.init();

//variaveis para selecionar os elementos
const FIELD_IDADE = document.getElementById('idade')
const TXT_IDADE = document.getElementById('txt-idade')

//txt-idade mostra o valor do campo idade
TXT_IDADE.innerText = FIELD_IDADE.value

//Atualizar idade com evento de usuario
FIELD_IDADE.addEventListener('change', ()=> {
    TXT_IDADE.innerText = FIELD_IDADE.value
} )