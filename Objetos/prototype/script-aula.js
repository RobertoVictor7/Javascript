function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade 
}

Pessoa.prototype.andar = function() {
    return  this.nome + ' Andou'
}

const andre = new Pessoa('Andre', 18)

// Construtores nativos 

const pais = 'Brasil';
const cidade = new String('Rio');

const listaAnimais = ['Cachorro', 'Gato', 'Lontra'];

const lista = document.querySelectorAll('li');

//transforma em uma array

const listaArray1 = Array.prototype.slice.call(lista)
const listaArray2 = Array.from(lista)

//retorna uma lista  com os métoodos/propriedades

const listaMetodos = Object.getOwnPropertyNames(Array)

//Entenda o que esta sendo retornado

const Carro =  {
    marca: 'Ford',
    preco: 2000,
    andar() {
        return true
    }
}