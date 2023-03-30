// configuração do lightbox
lightbox.option({
    'imageFadeDuration': 300,
    'disableScrolling': true,
    'fadeDuration': 300,
    'albumLabel': "Foto %1 de %2",
    'resizeDuration': 450

})

//inicializador do plugin aos animation
AOS.init();

// Tratamento do campo range, Função de execução automática
// os codigos aqui dentro ficam encapsulados
(() => {
    //variaveis para selecionar os elementos
    const FIELD_IDADE = document.getElementById('idade')
    const TXT_IDADE = document.getElementById('txt-idade')

    //txt-idade mostra o valor do campo idade
    TXT_IDADE.innerText = FIELD_IDADE.value

    //Atualizar idade com evento de usuario
    FIELD_IDADE.addEventListener('change', () => {
        TXT_IDADE.innerText = FIELD_IDADE.value
    })
})()

// Tratamento para os campos Estado e cidade 
const URL_ESTADOS = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome'
var estados = document.getElementById('estados')
// o primeiro .then() captura os dados
// o segundo trata os dados
// O cacth vai tatrar os erros
fetch(URL_ESTADOS).then(response => response.json()).then(
    json => {
        //Inicia a variavel options com os itens da lista
        let options = '<option>Selecione um estado</option>'

        //laço para concatenar a variavel options com a lista com os estados
        for (const i in json) {
            options += `<option value="${json[i].id}">${json[i].nome}</option>`
        }


        //Mostra dentro do select estados 
        estados.innerHTML = options
    }
).catch(erro => alert('erro é esse aqui manito,arrume isso ai! ' + erro))

//Quando o campo estados for atualizado ,o campo sera preenchido
estados.addEventListener('change', () => {

    let url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estados.value}/municipios?orderBy=nome`
     //acresentar cidades no campo
     let cidades = document.getElementById('cidades')
     let options = '<option>Selecione uma cidade</option>'
    fetch(url).then(response => response.json()).then(json => {

        for (const i in json) {
            options += `<option value="${json[i].nome}">${json[i].nome}</option>`
        }






        cidades.innerHTML = options
    }).catch(erro => alert(`erro presente: ${erro}`))

    console.log()


})

