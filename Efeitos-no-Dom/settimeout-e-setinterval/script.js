// Mude a cor da tela para azul e depois para vermelho a cada 2s.
// const body = document.querySelector("body");

// setInterval(() => {
//     body.classList.toggle("red");
// }, 2000)

// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).

const iniciar = document.querySelector('.iniciar');
const pause = document.querySelector('.pause');
const tempo = document.querySelector('.tempo');

let i = 1;
let timer;

function playCount() {
    timer = setInterval(() => {
        tempo.innerText = i++;
    }, 100);
    iniciar.setAttribute('disabled', '');
}

function stopCount(){
    clearInterval(timer);
    iniciar.removeAttribute('disabled');
}

function resetCount(){
    tempo.innerText = 0;
    i = 0;
}

iniciar.addEventListener('click', playCount)
pause.addEventListener('click', stopCount)
pause.addEventListener('dblclick', resetCount)
