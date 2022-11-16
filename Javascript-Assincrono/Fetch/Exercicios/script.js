// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar

const inputCep = document.querySelector('.cep')
const btnBuscar = document.querySelector('.buscar')
const resultadoCep = document.querySelector('.resultado-cep')

function handleClick(e) {
    e.preventDefault();
    const cep = inputCep.value;
    buscaCep(cep)
}

function buscaCep(cep) {
     fetch(`https://viacep.com.br/ws/${cep}/json/`)
     .then(res => res.text())
     .then(body => {
        resultadoCep.innerText = body
     })
}

btnBuscar.addEventListener('click', handleClick)

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s

const blockchainInfo = fetch('https://blockchain.info/ticker')
const areaBtc = document.querySelector('.btc-area')

blockchainInfo.then(res => res.json()).then(body => {
    const btc = `${body.BRL.buy} ${body.BRL.symbol}`
    areaBtc.innerText = btc;
    setInterval(() => {
        areaBtc.innerText = btc;
    }, 1000 * 30)
    
    
})

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima

const jokeArea = document.querySelector('.joke-area');
const nextJoke = document.querySelector('.nextJoke')

function chuckJoke() {
    const chuckApi = fetch('https://api.chucknorris.io/jokes/random')
    chuckApi.then(res => res.json()).then(body => {
        const joke = body.value;
        jokeArea.innerText = joke;
    })
}

nextJoke.addEventListener('click', chuckJoke)

chuckJoke()