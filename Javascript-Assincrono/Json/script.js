fetch('./dados.json')
.then(res => res.json())
.then(json => {
    json.forEach(materia => {
        console.log(materia.aula)
    })
})


const configuracoes = {
    player: 'Google API',
    tempo: 25.5,
    aula: '2-1 JavaScript',
    vitalicio: true,
  };
  
  localStorage.configuracoes = JSON.stringify(configuracoes);
  const pegarConfiguracoes = JSON.parse(localStorage.configuracoes);
  