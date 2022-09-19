//classes

const menu = document.querySelector('.menu');

menu.classList.add('ativo', 'teste');
menu.classList.remove('azul');
menu.classList.toggle('azul');

if(menu.classList.contains('azul')){
  menu.classList.add('possui-azul');
}else {
  menu.classList.add('nao-possui-azul')
}

menu.className += ' vermelho';

// atributtes

const animais = document.querySelector('.animais')
console.log(animais.attributes)

const img = document.querySelector('img');
console.log(img.getAttribute('src'))

img.setAttribute('alt', 'é uma raposa')

const possuiAlt = img.hasAttribute('alt')

console.log(possuiAlt)
 
img.removeAttribute('alt');

const carro = {
  portas: 4,
  andar: function(km) {
    console.log(`andou ${km}`)
  }
}