import { fetchhistoricalPrices } from './fetchhistoricalPrices.js';
import { fetchLatestKline } from './fetchLatestKline.js';

export function Cryptofetch(symbol, interval) {

  const historical_prices = "https://api.binance.com/api/v3/klines?symbol=" + symbol + "USDT" + "&interval=" + interval + "&limit=60";
  
  fetchhistoricalPrices(historical_prices);
  fetchLatestKline(historical_prices);
}
