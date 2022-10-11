const instrumentos = ["Guitarra", "Baixo", "Violão"];
const precos = [49, 99, 69, 89];

const dados = [
  new String("Tipo 1"),
  ["Carro", "Portas", { cor: "Azul", preco: 2000 }],
  function andar(nome) {
    console.log(nome);
  },
];

const carros = new Array("ford", "fiat", "honda");

carros[2] = "ferrari";

let li = document.querySelectorAll("li");

const arrayLi = Array.from(li);

console.log(arrayLi);

// Length

const frutas = ["Banana", "Pêra", ["Uva Roxa", "Uva Verde"]];

console.log(frutas.length);

// modificadores

// sort

console.log(instrumentos.sort()); // organiza por ordem alfabetica
console.log(precos.sort()); // não organiza numeros

// unshift e push

carros.unshift("Kia", "Ferrari"); // adiciona ao começo do Array
carros.push("Gol", "Golf"); // adiciona ao final do Array
console.log(carros);

// shift e pop

carros.pop(); // remove o ultimo item
console.log(carros);

carros.shift(); // remove o primeiro item
console.log(carros);

// reverse

carros.reverse(); // inverte o array
console.log(carros);

// splice

// adiciona valores na array a partir do index, remove a quantidade de itens que for passada no segundo parâmetro

carros.splice(1 /* index */, 0 /* remove */, "Kia", "Mustang");
console.log(carros);

carros.splice(3, 2, "Lexus", "Hyundai");
console.log(carros);

// copyWithin

let itens = ["item1", "item2", "item3", "item4", "item5"];

console.log(itens.copyWithin(2, 0 , 2))


// fill // preenche o array com um valor

let itensFill = itens.fill('Banana')
console.log(itensFill)

// includes indexOf e lastIndexOf

const linguagens = ['html', 'css', 'js', 'php', 'python', 'js'];

linguagens.includes('css'); // true
linguagens.includes('ruby'); // false
linguagens.indexOf('python'); // 4
linguagens.indexOf('js'); // 2
linguagens.lastIndexOf('js'); // 5

//join

linguagens.join(); // 'html,css,js,php,python'
linguagens.join(' '); // 'html css js php python'
linguagens.join('-_-'); // 'html-_-css-_-js-_-php-_-python'

let htmlString = '<h2>Título Principal</h2>'
htmlString = htmlString.split('h2');
// ['<', '>Título Principal</', '>']
htmlString = htmlString.join('h1');
// <h1>Título Principal</h1>

// SLICE

linguagens.slice(3); // ['php', 'python']
linguagens.slice(1, 4); // ['css', 'js', 'php']

const cloneLinguagens = linguagens.slice();




