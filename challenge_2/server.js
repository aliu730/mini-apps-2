const express = require('express');

const app = express();
const path = require('path');
const grabData = require('./client/src/dataGrabber.js');

app.get('/grabData', (req, res) => {
  grabData((data) => {
    res.send(data);
  });
});
app.use(express.static('./public'));

app.listen(3000, () => {
  console.log('LISTENING TO PORT 3000');
});
