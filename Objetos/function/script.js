const perimetro = new Function('lado', 'return lado * 4');

function somar(n1, n2) {
  return n1 + n2;
}

console.log(somar.length) // quantidade de parametros
console.log(somar.name) // nome da funcao

// call

function darOi() {
  console.log('oi pra você')
}

darOi.call()