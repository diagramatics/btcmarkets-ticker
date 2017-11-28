import axios from 'axios';

export function getMarketData(from, to) {
  return axios.get(
    `https://cors.now.sh/https://api.btcmarkets.net/market/${from.toUpperCase()}/${to.toUpperCase()}/tick`
  );
}

export default {
  getMarketData
};
