const button = {
    get tamanho() {
        return this._numero;
    },
    
    set tamanho(numero) {
        this._numero = numero;
    }
}


const frutas = {
    lista: [],
    set nova(fruta) {
        this.lista.push(fruta);
    }
}

// Metodos de get e set são acessados como propriedades de objetos

class Button {
    constructor(text, color) {
        this.text = text;
        this.color = color;
    }
    get element() {
        const type = this._elementType || 'button';
        const buttonElement = document.createElement(type);
        buttonElement.innerText = this.text;
        buttonElement.style.color = this.color;
        return buttonElement;
    }

    set element(type) {
        this._elementType = type;
    }
}

const blueButton = new Button('Comprar', 'blue')