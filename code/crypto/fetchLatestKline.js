export async function CryptofetchKline(symbol, interval) {
  const historical_prices = `https://api.binance.com/api/v3/klines?symbol=${symbol}USDT&interval=${interval}&limit=60`;

  try {
    const latestKline = await fetchLatestKline(historical_prices);
    console.log(latestKline);

    return { latestKline };
  } catch (error) {
    console.error("Fehler beim Abrufen der Krypto-Daten:", error);
    throw error;
  }
}

export function fetchLatestKline(historical_prices) {
    return fetch(historical_prices)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP-Error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        const kline = data[0];
        if (!kline) {
          throw new Error("No Kline data available");
        }
        return {
          openTime: new Date(kline[0]).toISOString(),
          open: parseFloat(kline[1]),
          high: parseFloat(kline[2]),
          low: parseFloat(kline[3]),
          close: parseFloat(kline[4]),
          volume: parseFloat(kline[5]),
          closeTime: new Date(kline[6]).toISOString(),
        };
      })
      .catch(error => {
        console.error("Error fetching Kline:", error);
        throw error;
      });
}

/*[
    [
        1736726400000,  // Opening time (Start time of the Kline)
        '188.50000000',  // Opening price (Open)
        '191.99000000',  // Highest price (High)
        '168.88000000',  // Lowest price (Low)
        '182.87000000',  // Closing price (Close)
        '5669925.61300000',  // Volume (Volume) – Total traded amount
        1736812799999,  // Closing time (End time of the Kline)
        '1015651889.57331000',  // Quote Asset Volume (Trading value in the quote asset)
        2547519,  // Number of trades
        '2692190.17500000',  // Taker Buy Base Asset Volume (Amount of base asset bought by takers)
        '482872920.51139000',  // Taker Buy Quote Asset Volume (Value of the base asset in the quote currency bought by takers)
        '0'  // Usually "ignore" or additional data (not typically relevant)
    ]
]*/ 
