const express = require('express');
const app = express();
const path = require('path');

// app.get('/', (req, res) {

// });
app.use(express.static('./public'));

app.listen(3000, ()=>{
  console.log('LISTENING TO PORT 3000');
})