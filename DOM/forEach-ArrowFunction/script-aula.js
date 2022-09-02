const imgs = document.querySelectorAll('img');


imgs.forEach(function(item, index, array){
    console.log(item, index, array)
});

const titulos = document.getElementsByClassName('titulo')
const titulosArray = Array.from(titulos)

titulosArray.forEach(function(item) {
    console.log(item)
})

// Function padrão

let i = 0;
imgs.forEach(function() {
    console.log(i++)
})

// Arrow Function

imgs.forEach(() => console.log(i++))