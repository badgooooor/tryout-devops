const express = require('express');
const os = require('os');

const app = express();

app.get('/', (req, res) => {
  res.send(`Hello ${os.hostname()} ${req.ip}`);
});

app.listen(3000, () => console.log('Running at port 3000'));
