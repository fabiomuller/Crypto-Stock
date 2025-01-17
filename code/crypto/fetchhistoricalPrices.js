export function fetchhistoricalPrices(historical_prices) {
  fetch(historical_prices)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Fehler:", error));
}
