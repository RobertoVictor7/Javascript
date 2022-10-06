const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
const precos = [49, 99, 69, 89];

const dados = [new String('Tipo 1'), ['Carro', 'Portas', {cor: 'Azul',preco: 2000}], function andar(nome) {console.log(nome)}];

const carros = new Array('ford', 'fiat', 'honda');

carros[2] = 'ferrari';
carros[20] = 'dodge'

let li = document.querySelectorAll('li')

const arrayLi = Array.from(li)

console.log(arrayLi)