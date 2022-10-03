// Exemplo Real

// const Dom = {
//     seletor: 'li',
//     element() {
//         const elementoSelecionado = document.querySelector(this.seletor);
//         return elementoSelecionado;
//     },
//     ativar() {
//         this.element().classList.add('ativar');
//     }
// }

function Dom(seletor) {
    this.element = function() {
        return document.querySelector(seletor)
    }
    this.ativar = function() {
        this.element().classList.add('ativar')
    }
}

const li = new Dom('li');