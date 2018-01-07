import axios from 'axios';

export function getMarketData(from, to) {
  return axios.get(`/api/${from}/${to}`);
}

export default {
  getMarketData
};
