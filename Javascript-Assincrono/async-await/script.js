async function puxarDados() {
    const responseDados = fetch('./dados.json')
    const responseClientes = fetch('./clientes.json')

    const jsonDados = await (await responseDados).json();
    const jsonClientes = await (await responseClientes).json();


    console.log(jsonDados)
    console.log(jsonClientes)
}

puxarDados()