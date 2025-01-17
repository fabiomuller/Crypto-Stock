import { Cryptofetch } from './Cryptofetch.js';
const dropdown = document.getElementById("dropdown-menu");
const searchInput = document.getElementById("search");

searchInput.addEventListener("focus", () => {
  dropdown.classList.add("show");
});

Cryptofetch("SOL", "1m"); //function for fetching historical Prices and latest kline

searchInput.addEventListener("blur", () => {
  setTimeout(() => {
    dropdown.classList.remove("show");
  }, 200);
});
