const promessa = new Promise((resolve, reject) => {
  let condicao = true;
  if (condicao) {
    setTimeout(() => {
        resolve('estou pronto!');
    }, 1000)
    
  } else {
    reject(Error('um erro ocorreu.'));
  }
});


promessa.then((data) => {
    console.log(data);
    return data + ' then encadeado'
}).then((data) =>{
    console.log(data);
}).catch((err) => {
    console.log(err)
}).finally(() => {
    console.log('fim :)')
});

const login = new Promise((resolve) =>{
    setTimeout(() => {
        resolve('usuario logado');
    }, 1000)
})

const dados = new Promise((resolve) => {
    setTimeout(() => {
        resolve('dados carregados');
    }, 1500)
})

const carregouTudo = Promise.all([login, dados])

carregouTudo.then((data) =>{
    console.log(data);
});

const carregouRace = Promise.race([login, dados])

carregouRace.then((data) =>{
    console.log(data);
});