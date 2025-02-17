const chave = "791b131695d63f60723a66849b8f8d74"


function colocarnaTela(dados){
    console.log(dados)
    document.querySelector("#nome-cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector("#temperatura").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector("#estado").innerHTML =  dados.weather[0].description

}

async function buscarCidade(input){

    
    // espere até que o servidor responda
    let dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${chave}&lang=pt_br&units=metric
`).then(resposta => resposta.json())

// fazer uma verificação se o input dado é equivalente a alguma informação no servidor caso contrário vou exibir na tela "Cidade inválida"

    colocarnaTela(dados)
}

function pegarDados(){
    let input = document.querySelector("#enviar-dados").value

    console.log(input)

    buscarCidade(input)
}