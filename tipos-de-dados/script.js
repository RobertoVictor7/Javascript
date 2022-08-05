//Todos são primitivos exceto os Objetos

var nome = 'Victor'; // String
var idade = 21; // Number
var possuiFaculdade	= true; // Boolean
var time; // undefined
var comida = null; // null
var simbolo = Symbol(); // Symbol
var novoObjeto = {} // Object

//primitivos são dados imutáveis.

//verificar tipo de dado 

console.log(typeof nome)

//concatenando strings

var sobrenome = 'Roberto';
var nomeCompleto = nome + ' ' + sobrenome

console.log(nomeCompleto)

var gols = 1000;
var frase = 'Romario fez ' + gols + ' gols'

var frase2 = `Romário fez ${gols} gols` //template strings

console.log(frase)
console.log(frase2)

//Exercício 

var contemString = 'Variavel contendo string';
var numString = '8';
var minhaIdade = 21;
var meuNome = 'Roberto';
var meuSobrenome = 'Victor';
var nomeCompleto = `${meuNome} ${meuSobrenome}`;
var frase3 = "It's time";
console.log(typeof nomeCompleto)

console.log(contemString, numString, minhaIdade, meuNome,meuSobrenome, nomeCompleto, frase3)
