import axios from 'axios';

export async function getMarketData() {
  return axios.get('http://localhost:3000/market-data');
}


export default {
  getMarketData,
};
