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