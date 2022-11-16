const cep = fetch('https://viacep.com.br/ws/09725051/json/')

cep.then(data => {
    return data.json();
}).then((body) => {
    console.log(body);
    const conteudo = document.querySelector('.conteudo');
    
    conteudo.innerText = body.logradouro;
})

// imagem
 
const imagem = fetch("./teste.png");
imagem
  .then(data => data.blob())
  .then(body => {
    const blobUrl = URL.createObjectURL(body)
    const imagemDom = document.querySelector('img')
    imagemDom.src = blobUrl;
  });

// clone

const cep2 = fetch('https://viacep.com.br/ws/09725051/json/')

cep2.then(data => data.clone())
.then(body => {
    console.log(body);
})