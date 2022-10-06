// Retorne um número aleatório
// entre 1050 e 2000
const min = 1050
const max = 2000

const numeroaleatorio = Math.floor(Math.random() * (max - min + 1) + min)
console.log(numeroaleatorio)


// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9';
const array = numeros.split(', ');

const maiorNumero =  Math.max(...array); // operador spread passa cada item do array como valor isolado
console.log(maiorNumero);


// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222',
                     'R$ 230  ', 'r$  200'];

let sum = 0

function limpaPreco() {
    listaPrecos.forEach((item) => {
        item = item.trim();
        item = item.toUpperCase();
        item = item.slice(3);
        item = item.trim();
        item = item.replace(',', '.');
        item = parseFloat(item);
        item = Math.round(item)
        sum += item
    })
}

limpaPreco()
console.log(sum)