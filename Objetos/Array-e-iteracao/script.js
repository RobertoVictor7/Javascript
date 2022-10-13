const carros = ['Ford', 'Fiat', 'Honda'];

// forEach

carros.forEach(function (item, index, array) {
  console.log(item.toUpperCase(), index, array);
});


const li = document.querySelectorAll('li');
li.forEach(i => i.classList.add('ativa'));

// Map

const novaArray = carros.map((item, index, array) => {
    console.log(item.toUpperCase(), index, array);
    return item.toUpperCase();
})

const numeros = [2, 4, 5, 6, 78];

const numerosX2 = numeros.map(item => {
    return item * 2
})


console.log(numerosX2)
console.log(novaArray)

const aulas = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]


const tempoAulas = aulas.map(item => item.min);

function nomeAulas(aula) {
  return aula.nome;
}

const arrayNomeAulas = aulas.map(nomeAulas)

console.log(arrayNomeAulas)
console.log(tempoAulas);

const aulas2 = [10, 25, 30]; 

const reduceAulas = aulas2.reduce((acumulador, item) => {
  return acumulador + item
}, 0)

console.log(reduceAulas);

const numeros2  = [2, 40, 13, 22, 37]

const maiorNumero = numeros2.reduce((acumulador, item) => {
  if(acumulador > item) {
    return acumulador;
  } else {
    return item;
  }
})

console.log(maiorNumero)

const listaAulas = aulas.reduce((acumulador, item, index) => {
  acumulador[index] = item.nome;
  return acumulador;
}, {})

console.log(listaAulas)

// some

const frutas = ['Banana', 'Pêra', 'Uva'];

const temUva = frutas.some((item) => {
  return item === 'Uva'
})

console.log(temUva);

// every 

const every = frutas.every((item) => {
  return item === 'Uva'
})

console.log(every)

// find 

const indexUva = frutas.findIndex((item) => { 
  return item == 'Uva'
})

console.log('index:',indexUva)

// filter 

const frutas1 = ['Banana', undefined, null, '', 'Cereja', 0 ,'Abacaxi']

const arrayFrutas = frutas.filter((item) => {
  return item;
})

console.log(arrayFrutas)

const maiores15 = aulas.filter((item) => {
  return item.min > 15;
})

console.log(maiores15)