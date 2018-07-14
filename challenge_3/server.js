const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, './public')));
console.log(path.join(__dirname, './public'));
app.listen(3000, (err) => {
  console.log('Listening to 3000');
});
