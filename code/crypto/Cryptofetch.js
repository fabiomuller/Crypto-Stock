import { fetchhistoricalPrices } from './fetchhistoricalPrices.js';
import { fetchLatestKline } from './fetchLatestKline.js';

const symbol = "SOLUSDT";
const interval = "1m";
const historical_prices = "https://api.binance.com/api/v3/klines?symbol=" + symbol + "&interval=" + interval + "&limit=60";

fetchhistoricalPrices(historical_prices);

fetchLatestKline(historical_prices)
