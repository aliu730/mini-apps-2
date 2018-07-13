const request = require('request');

const grabData = (callback) => {
  request.get('https://api.coindesk.com/v1/bpi/historical/close.json', function(err, response, body) {
    callback(JSON.parse(body));
  });
};

module.exports = grabData;
