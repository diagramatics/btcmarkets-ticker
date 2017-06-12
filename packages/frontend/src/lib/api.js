import axios from 'axios';

export function getMarketData() {
  return axios.get(
    'https://cors.now.sh/https://api.btcmarkets.net/market/BTC/AUD/tick',
  );
}

export default {
  getMarketData,
};
