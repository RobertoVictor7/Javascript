const carro = {
    marca: 'Honda',
    ano: 2018
}

const {marca, ano} = carro;


console.log(marca, ano)

// destructuring objects

const cliente = {
    nome: 'Andre',
    compras: {
      digitais: {
        livros: ['Livro 1', 'Livro 2'],
        videos: ['Video JS', 'Video HTML']
      },
      fisicas: {
        cadernos: ['Caderno 1']
      }
    }
  }
  
//   console.log(cliente.compras.digitais.livros);
//   console.log(cliente.compras.digitais.videos);
  
  const {livros, videos} = cliente.compras.digitais;
  
  console.log(livros);
  console.log(videos);
  

// arrays

const frutas = ['Banana', 'Uva', 'Morango'];

const [primeira, segunda, terceira] = frutas;


// destructuring arguments

function handleKeyboard({key}) {
    console.log(key)
}

document.addEventListener('keyup', handleKeyboard)