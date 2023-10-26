
const key = '43d2bb5c2860d9ca0a74976fe52a9f75'


function colocarDadosNaTela(dados){

    
    document.querySelector('.cidade').innerHTML = "Tempo em " + dados.name 

    document.querySelector('.temp').innerHTML = Math.floor(dados.main.temp) + '°C'//Math.floor vai arredondar o numero

    document.querySelector('.texto-previsao').innerHTML = dados.weather[0].description

    document.querySelector('.umidade').innerHTML = 'Umidade: ' + dados.main.humidity + '%'

    document.querySelector('.img-previsao').src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

async function buscarCidade(cidade) {
    
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())

    colocarDadosNaTela(dados)

    /*
    usamos a palavra await para fazer esperar até o servidor mandar as informaçoes assim que mandar o codigo volta a rodar

    fetch('') usamos para acessar o servidor
    */ 

    /*
    assim que os dados chegarem usamos o comando then vai dizer o que fazer com os dados pegos 
    dentro do tem usei uma arrow fuction e transformei os dados em json()
    */

    /*
    O json()método que converte valores pegos em api 
    olhar no mdm ou no video :https://www.youtube.com/watch?v=qxzqEuAOYZ4&t=1730s minuto 35
    */
}//async usamos so para acessar servidor , e mais facil de avisar que esta acessando um servidor pq pode demorar



function cliqueiNoBotao(){
    const cidade = document.querySelector(".input-cidade").value

    buscarCidade(cidade)
}