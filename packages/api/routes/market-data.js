const { send } = require('micro');
const axios = require('axios');

module.exports.GET = async (req, res) => {
  const response = await
    axios.get('https://api.btcmarkets.net/market/BTC/AUD/tick');

  send(res, 200, response.data);
}
