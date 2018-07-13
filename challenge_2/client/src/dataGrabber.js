// const request = require('request');
// import request from 'request';
const axios = require('axios');

const grabData = (callback) => {
  // request.get('https://api.coindesk.com/v1/bpi/historical/close.json', function(err, response, body) {
  //   callback(JSON.parse(body));
  // });
  axios.get('https://api.coindesk.com/v1/bpi/historical/close.json')
    .then((response) => {
      // console.log(response);
      callback(response.data);
    });
};

module.exports = grabData;
