// retorne no console todas as imagens do site

const todasImagens = document.querySelectorAll('img')
console.log(todasImagens)

// retorne no console apenas as imagens que começaram com a palavra imagem

const imagensAnimais = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imagensAnimais)

// selecione todos os links internos (onde o href começa com #)

const linksInternos = document.querySelectorAll('a[href^="#"]')
console.log(linksInternos)


// selecione o primeiro h2 dentro de .animais-descricao

const h2Animais = document.querySelector('.animais-descricao h2')

console.log(h2Animais)


// seleicone o ultimo p do site

const paragrafo = document.querySelectorAll('p');
console.log(paragrafo[paragrafo.length - 1])