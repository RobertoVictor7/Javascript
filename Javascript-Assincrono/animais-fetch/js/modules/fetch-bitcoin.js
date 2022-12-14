export default function initfetchBitcoins() {}

async function fetchBitcoin(url) {
  try {
    const bitcoinResponse = await fetch(url);
    const bitcoinJson = await bitcoinResponse.json();
    const btcPreco = document.querySelector(".btc-preco");
    btcPreco.innerText = (1000 / bitcoinJson.BRL.sell).toFixed(4);
  } catch(err) {
    console.log(err);
  }
}

fetchBitcoin("https://blockchain.info/ticker");
