export default function initFetchBitcoin() {
  fetch("https://blockchain.info/ticker")
    .then((res) => {
      return res.json();
    })
    .then((bitcoin) => {
      const precoBtc = document.querySelector(".btc-preco");
      precoBtc.innerText = (1000 / bitcoin.BRL.sell).toFixed(4);
    })
    .catch((erro) => {
      console.log(Error(erro));
    });
}
