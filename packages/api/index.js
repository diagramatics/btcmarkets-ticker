const { send } = require('micro');
const microCors = require('micro-cors');
let match = require('fs-router')(__dirname + '/routes');

const cors = microCors({
  allowMethods: ['GET'],
  origin: 'http://localhost',
  maxAge: 10,
});

module.exports = cors(async (req, res) => {
  let matched = match(req);
  if (matched) return await matched(req, res);
  send(res, 404, { error: 'Not found' });
});
