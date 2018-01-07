const { send } = require('micro');
const fetch = require('node-fetch');
const microCors = require('micro-cors')

const cors = microCors({ allowMethods: ['GET'], origin: process.env.NODE_ENV === 'production' ? 'https://crypto.dgr.li' : 'http://localhost:8080' });

module.exports.GET = cors(async (req, res) => {
  const { currency, instrument } = req.params;
  const response = await fetch(`https://api.btcmarkets.net/market/${instrument.toUpperCase()}/${currency.toUpperCase()}/tick`);
  const result = await response.json();
  send(res, 200, result);
});


