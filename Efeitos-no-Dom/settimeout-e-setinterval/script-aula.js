function espera(texto) {
  console.log(texto);
}

setTimeout(espera, 1000, "Depois de 1s");

setTimeout(function () {
  console.log("testando");
}, 0);

// loops e settimeout

for (let i = 0; i < 20; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000 * i);
}


// setInterval

function loop(texto) {
    console.log(texto);
}

setInterval(loop, 1000, 'Passou 1s')

let i = 0; 
setInterval(() => {
    console.log(i++);
}, 1000);

// clear interval

const contarAte10 = setInterval(callback, 1000);

function callback() {
  console.log(i++);
  if (i > 10) {
    clearInterval(contarAte10);
  }
}
