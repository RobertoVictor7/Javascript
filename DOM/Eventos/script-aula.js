const img = document.querySelector("img");

function callback(event) {
  //console.log(event)
}

img.addEventListener("click", callback);

const animaisLista = document.querySelector('.animais-lista');

function callbackLista(event) {
  console.log(event.currentTarget);
  console.log(event.target)
  console.log(event.type)
}

// animaisLista.addEventListener('click', callbackLista)

// Callback
//É boa prática separar a função de callback do
//addEventListener, ou seja, declarar uma função ao invés
//de passar diretamente uma função anônima.


//Event geralmente chamado de 'e'

//O primeiro parâmetro do callback é referente ao evento que ocorreu.


const linkExterno = document.querySelector('a[href^="http"]');

function handleLinkExterno(event) {
  event.preventDefault();
  console.log('clicou');
  console.log(this.getAttribute('href'));
  console.log(event.currentTarget)
}

linkExterno.addEventListener('click', handleLinkExterno);


const h1 = document.querySelector('h1');

function handleEvent(event) {
  console.log(event.type, event)
}

// h1.addEventListener('click', handleEvent);
// h1.addEventListener('mouseenter', handleEvent);
// h1.addEventListener('mousemove', handleEvent);

// window.addEventListener('scroll', handleEvent);
// window.addEventListener('rezise', handleEvent);
// window.addEventListener('keydown', handleEvent);

function handleKeyboard(event) {
  if(event.key === 'a') {
    document.body.classList.toggle('azul')
  }
    
}

window.addEventListener('keydown', handleKeyboard)

//This

// A palavra chave this é uma palavra especial de JavaScript
// que pode fazer referência a diferentes objetos dependendo
// do contexto. No caso de eventos, ela fará refêerencia ao elemento que o addEventListener foi adicionado.


const imgs = document.querySelectorAll('img')

function handleImg(event) {
  console.log(event.currentTarget.getAttribute('src'))
}

imgs.forEach((item => {
  item.addEventListener('click', handleImg)
}))



