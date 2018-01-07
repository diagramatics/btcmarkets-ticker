const { send } = require('micro')
let match = require('fs-router')(__dirname + '/routes')

module.exports = async (req, res) => {
  const matched = match(req);

  if (matched) {
    return await matched(req, res);
  }

  send(res, 404, { error: 'Not found' });
};
