//isNaN

console.log(Number.isNaN(NaN));
console.log(Number.isNaN(4 + 4));

//isInteger 

console.log(Number.isInteger(20));
console.log(Number.isInteger(20.1))

//parseFloat

console.log(parseFloat('1.1910'))
console.log(parseFloat('100 reais'))

//parseInt

console.log(parseInt('100.5 reais'))

//toFixed
const preco = 2.99;
preco.toFixed(); // 3

const carro = 1000.455;
carro.toFixed(2); // 1000.46

//toLocaleString 

const precoformatado = preco.toLocaleString('pt-BR', {style: 'currency',currency: 'BRL'})
console.log(precoformatado)

// Math

Math.abs(-5.5) // 5.5 transforma em absoluto
Math.ceil(4.3) // 5 arredonda pra cima
Math.floor(4.83) // 4 arredonda pra baixo
Math.round(4.3) // 4 arredonda normal
Math.max(4,5,6,25,8) // 25
Math.min(23,7,665,54) // 7
Math.random() // numeros aleatorios de 0.0 até 1.0

const aleatorio = Math.floor(Math.random() * 100) // gera numero aleatorio de 0 a 100

console.log(aleatorio)

// numero random entre um numero e outro

const random = Math.floor(Math.random() * (72 - 31 + 1 )) + 32;
console.log(random)