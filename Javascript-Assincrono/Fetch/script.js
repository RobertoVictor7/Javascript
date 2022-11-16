const sobre = fetch("./sobre.html");

const div = document.createElement('div');

sobre
  .then((data) => {
    return data.text();
  })
  .then((body) => {
    div.innerHTML = body;
    const titulo = div.querySelector('h1');
    console.log(titulo)
  });
