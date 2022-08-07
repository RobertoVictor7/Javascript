// numerais

var idade = 23;
var exponencial = 2e10;
var decimal = 3.14;

console.log(idade, exponencial, decimal);

// operadores aritiméticos basicos

var soma = 100 + 50;
var subtracao = 100 - 50;
var multiplicacao = 100 * 2;
var divisao = 100 / 2;
var expoente = 2 ** 4; 
var modulo = 14 % 5;

console.log(soma, subtracao, multiplicacao, divisao, expoente, modulo)

// operadores aritiméticos (Strings)

var soma = '100' + 50;
var subtracao = '100' - 50;
var multiplicacao = '100' * '2';
var divisao = 'Comprei 10' / 2;

console.log(soma, subtracao, multiplicacao, divisao)

// a ordem importa, comepça por multiplicacao e divisao, depois soma e subtracao.
// utilizar parênteses para priorizar uma equação.

// Operadores aritiméticos unários;

var incremento = 5;
console.log(incremento++);
console.log(incremento);

var incremento2 = 5;
console.log(++incremento2);
console.log(incremento2);

var decremento = 5;
console.log(--decremento);

var idade = '23';
var somaIdade = 5;
console.log(+idade + somaIdade);

// exercicio

var total = 10 + 5 * 2 / 2 + 20;
console.log(total);

var nan1 = 3 / '2s';
console.log(nan1)

var nan2 = 5 * nan1;
console.log(nan2)

var n1 = '200';
var n2 = 50;
var soma = +n1 + n2;
console.log(soma)

var base = 5;
base++;
console.log(base);

// como dividir o peso por 2?

var numero = +'80' / 2;
var unidade = 'kg';
var peso = numero + unidade;


console.log(peso)