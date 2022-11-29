const frutas = ['Banana', 'Morango', 'Uva'];
const frase = 'Isso é JavaScript';

for(const fruta of frutas) {
    console.log(fruta)
}

for(const char of frase) {
    console.log(char)
}

const buttons = document.querySelectorAll('button');

for(const button of buttons) {
    button.style.color = 'blue';
}

console.log(...buttons)


const carro = {
    marca: 'Honda',
    ano: 2018
}

for(const chave in carro) {
    console.log(carro[chave])
}

// fetch('https://pokeapi.co/api/v2/pokemon/')
// .then(({headers}) => console.log(headers));


