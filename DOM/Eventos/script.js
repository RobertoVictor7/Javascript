// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna 
// o comportamento padrão desses links.

const linksInternos = document.querySelectorAll('a[href^="#"]');

function addAtivo(event) {
    event.preventDefault();

    linksInternos.forEach((item) => {
      item.classList.remove('ativo')
    });

    event.target.classList.toggle('ativo');
}

linksInternos.forEach((item) => {
    item.addEventListener('click', addAtivo)
})

//Selecione todos os elementos do site começando a partir do body,
//ao clique mostre exatamente quais elementos estão sendo clicados.

const todosElementos = document.querySelectorAll('*')

console.log(todosElementos)

function showElement(event){
  //console.log(event.target)
}

todosElementos.forEach((item, index) => {
  if(index >= 7) {
    item.addEventListener('click', showElement)
  }
}) 


//Utilizando o código anterior, ao invés de mostrar no console, 
// remova o elemento que está sendo clicado, o metodo remove() remove um elemento

const todosElementosRemove = document.querySelectorAll('*')

console.log(todosElementos)

function showElement(event){
  event.target.remove()
}

todosElementosRemove.forEach((item, index) => {
  if(index >= 7) {
    item.addEventListener('click', showElement)
  }
}) 



// Se o usuário clicar na tecla (t), aumente todo o texto do site.

const text = document.querySelectorAll('p')

function textUp(event){
  if(event.key === 't') {
    text.forEach((item) => {
      item.classList.toggle('font-size-max')
    })
  }
}


window.addEventListener('keydown', textUp)


