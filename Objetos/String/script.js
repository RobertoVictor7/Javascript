// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
  {
    descricao: "Taxa do Pão",
    valor: "R$ 39",
  },
  {
    descricao: "Taxa do Mercado",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 99",
  },
  {
    descricao: "Taxa do Banco",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 49",
  },
];

let somaTaxa = 0;
let somaRecebimento = 0;

transacoes.forEach((item) => {
  const taxa = item.descricao.includes("Taxa");

  if (taxa) {
    let taxaFormatado = +item.valor.replace("R$ ", "");
    somaTaxa += taxaFormatado;
  } else {
    let recebimentoFormatado = +item.valor.replace("R$ ", "");
    somaRecebimento += recebimentoFormatado;
  }
});

console.log(somaTaxa);
console.log(somaRecebimento);

// Retorne uma array com a lista abaixo
const transportes = "Carro;Avião;Trem;Ônibus;Bicicleta";

const arrayTransportes = transportes.split(";");
console.log(arrayTransportes);

// Substitua todos os span's por a's
const html = `<ul>
                  <li><span>Sobre</span></li>
                  <li><span>Produtos</span></li>
                  <li><span>Contato</span></li>
                </ul>`;

const htmlArray = html.split("span");
const novoHtml = htmlArray.join("a");
console.log(novoHtml);

// Retorne o último caracter da frase
const frase = "Melhor do ano!";

console.log(frase[frase.length - 1]);

// Retorne o total de taxas
const transacoes2 = [
  "Taxa do Banco",
  "   TAXA DO PÃO",
  "  taxa do mercado",
  "depósito Bancário",
  "TARIFA especial",
];

transacoes2.forEach((item) => {
  item = item.toLowerCase();
  item = item.trim();
  const taxas = item.includes("taxa");
  if (taxas) {
    console.log(item);
  }
});
