class Veiculo {
    constructor(rodas) {
        this.rodas = rodas
    }
    acelerar() {
        console.log('Acelerou')
    }
}


class Moto extends Veiculo {
    acelerar() {
        super.acelerar();
        console.log('Acelerou rápido')
    }

    empinar() {
        console.log('Moto Empinou com ' + this.rodas + ' rodas');
    }
}

const honda = new Moto(2);
const civic = new Veiculo(4)