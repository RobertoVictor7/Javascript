//Verifique a distância da primeira imagem em relação ao topo da página

const primeiraImg = document.querySelector('img');
const distanciaImg = primeiraImg.offsetTop;
console.log(distanciaImg);

//Retorne a soma da largura de todas as imagens

function somaImagens() {
const imgs = document.querySelectorAll('img')
let soma = 0;

imgs.forEach((item) => {
    soma += item.offsetWidth
})
console.log(soma);
}

window.onload = function() {
    somaImagens();
}


//Verifique se os links da página possuem o minimo recomendado para telas utilizadas com o dedo. (48px/48px de acordo com o google)

const links = document.querySelectorAll(('a'));

links.forEach((item) => {
    const larguraLink = item.offsetWidth;
    const alturaLink = item.offsetHeight;
    if(larguraLink && alturaLink >= 48) {
        console.log(item, 'possui boa acessibilidade')
    }else {
        console.log(item, 'não possui boa acessibilidade')
    }
})

//Se o browser for menos que 720 adicione a classe menu-mobile ao menu

const menu = document.querySelector('.menu');
const mobile = window.matchMedia('(max-width: 720px)').matches;
if(mobile) {
    menu.classList.add('menu-mobile');
}