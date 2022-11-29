function perimetroForma(...listaArgumentos) {
   console.log(listaArgumentos)
   listaArgumentos.forEach((item) => {
    console.log(item)
   })
    // return lado * totalLados
}
 
perimetroForma(10, 20, 30, 40, 'teste')


function anunciarGanhadores(premio, ...ganhadores) {
    ganhadores.forEach(ganhador => {
      console.log(ganhador + ' ganhou um ' + premio)
    });
  }

  const ganhadores = ['Pedro', 'Marta', 'Maria']
  
  anunciarGanhadores('Carro', ...ganhadores);
  


const frutas = ['Banana', 'Uva', 'Morango'];
const legumes = ['Cenoura', 'Batata']

const comidas = [...frutas, ...legumes]

console.log(comidas)


const btns = document.querySelectorAll('button')
const btnArray = [...btns]

console.log(btnArray)