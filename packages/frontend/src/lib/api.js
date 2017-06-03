import axios from 'axios';

export async function getMarketData() {
  return await axios.get('https://api.btcmarkets.net/market/BTC/AUD/tick');
}


export default {
  getMarketData,
};
