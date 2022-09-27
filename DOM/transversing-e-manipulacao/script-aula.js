// const h1 = document.querySelector('h1');
// const animaisLista = document.querySelector('.animais-descricao')

// // console.log(animaisLista.innerHTML)

// const lista = document.querySelector('.animais-lista');

// lista.parentElement // pai
// lista.parentElement.parentElement // pai do pai
// lista.previousElementSibling // elemento acima mo html
// lista.nextElementSibling // elemento abaixo no html

// lista.children // HTMLCollection com os filhos
// lista.children[0] // primeiro filho

// console.log(lista.children[--lista.children.length])// ultimo filho

// const animais = document.querySelector('.animais')
// const contato = document.querySelector('.contato');
// const titulo = contato.querySelector('.titulo')

// // animais.appendChild(titulo) // move titulo para o final de animais 

// // contato.insertBefore(animais, titulo) // insere a lista antes de titulo

// // contato.removeChild(titulo) // remove titulo de contato

// // contato.replaceChild(lista, titulo) //substitui titulo por lista


// // NOVOS ELEMENTOS - podemos criar novos elementos com o metódo createElement()

// const mapa = document.querySelector('.mapa')

// const novoh1 = document.createElement('h1');
// novoh1.innerText = 'Novo Titulo';
// novoh1.classList.add('titulo');
// mapa.appendChild(novoh1)

// // CLONAR ELEMENTOS

const h1 = document.querySelector('h1');
const faq = document.querySelector('.faq')

const cloneh1 = h1.cloneNode(true)
cloneh1.classList.add('azul')

faq.appendChild(cloneh1)

