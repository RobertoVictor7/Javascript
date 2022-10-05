const comida = 'Pizza';
const agua = new String('Agua')


// length

console.log(comida.length) // total de caracteres
console.log(comida[0]) // acessando caracteres como array

const frase = 'A melhor comida';

console.log(frase[frase.length - 1]); // pegar a ultima letra

// charAt

const linguagem = 'JavaScript';
console.log(linguagem.charAt(0)) // retorna carceter de acordo com o index 

// concat

console.log(comida.concat(' de mussarela'))

// includes 

const fruta = 'Banana';
const listaFrutas =  'Melancia, Banana, Laranja';

listaFrutas.includes(fruta); // true
fruta.includes(listaFrutas); // false


console.log(listaFrutas.includes(fruta, 4)); // segundo parametro é o index que eu quero que ela comece a procurar 

// endsWith e startsWith 

fruta.endsWith('nana'); //true
fruta.startsWith('Ba'); // true
fruta.startsWith('na'); // false

// slice  - corta string de acordo com valores de start e end

const transacao1 = 'Deposito de cliente';
const transacao2 = 'Deposito de fornecedor';
const transacao3 = 'Taxa de camisas';

transacao1.slice(0, 3); // Dep
transacao2.slice(0, 3); // Dep
transacao3.slice(0, 3); // Tax

transacao1.slice(12); // cliente
transacao1.slice(-4); // ente
transacao1.slice(3, 6); // osi

// indexOf e lastIndexOf

const instrumento = 'Guitarra';

instrumento.indexOf('r'); // 5
instrumento.lastIndexOf('r') // 6
instrumento.indexOf('ta') // 3

//padStart padEnd

const preco = 'R$ 99,00';

const pad  = preco.padStart(20, '.');

console.log(pad);

// repeat 

const ta = 'Ta';

console.log(ta.repeat(5)); // TaTaTaTaTa

// replace

let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
listaItens = listaItens.replace(/[ ]+/g, ', ') // regex espaço
    

// split 

const arrayItens = listaItens.split(', '); // quebra em item do Array toda vez que o parametro aparecer 

console.log(arrayItens)

const htmlText = '<div>O melhor item</div><div>A melhor lista</div>';
const htmlArray = htmlText.split('div');
const novoHtml = htmlArray.join('section');

console.log(htmlArray);
console.log(novoHtml);

//trim trimStart trimEnd

const valor = '  R$23.00  '
valor.trim(); // 'R$23.00'
valor.trimStart(); // 'R$23.00  '
valor.trimEnd(); // '  R$23.00'
