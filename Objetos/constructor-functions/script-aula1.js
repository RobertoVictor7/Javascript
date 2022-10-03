// CONSTRUCTOR FUNCTIONS

// Para isso existem as constructor funcitons ou seja, funcões construtoras que são responsaveis por construir novos objetos sempre que chamamos a mesma.

function Carro(marca, preco) {
    this.marca = marca;
    this.preco = preco
}

const fiat = new Carro('fiat', 3000);


function Carro2(marca, precoInicial){ 
    const taxa = 1.2;
    const precoFinal = precoInicial * taxa;
    this.marca = marca
    this.preco = precoFinal
}

const mazda = new Carro2('mazda', 5000)