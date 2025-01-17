const symbol = "SOLUSDT";
const url = "https://api.binance.com/api/v3/ticker/price?symbol=" + symbol;

fetch(url)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Fehler:", error));
