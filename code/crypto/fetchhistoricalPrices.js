export async function CryptofetchHistorical(symbol, interval) {
  const historical_prices = `https://api.binance.com/api/v3/klines?symbol=${symbol}USDT&interval=${interval}&limit=60`;

  try {
    const historicalPrices = await fetchhistoricalPrices(historical_prices);
    console.log(historicalPrices);

    return { historicalPrices };
  } catch (error) {
    console.error("Fehler beim Abrufen der Krypto-Daten:", error);
    throw error;
  }
}

export async function fetchhistoricalPrices(historical_prices) {
  try {
    const response = await fetch(historical_prices);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fehler:", error);
    throw error;
  }
}
