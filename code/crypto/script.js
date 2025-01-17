import { CryptofetchHistorical } from './fetchhistoricalPrices.js';
import { CryptofetchKline } from './fetchLatestKline.js';
/*const dropdown = document.getElementById("dropdown-menu");
const searchInput = document.getElementById("search");

searchInput.addEventListener("focus", () => {
  dropdown.classList.add("show");
});*/

let historicalPrices = CryptofetchHistorical("SOL", "1m"); //function for fetching historical Prices and latest kline
let latestKline = CryptofetchKline("SOL", "1m");

console.log(historicalPrices);
console.log(latestKline);
/*
searchInput.addEventListener("blur", () => {
  setTimeout(() => {
    dropdown.classList.remove("show");
  }, 200);
});*/
