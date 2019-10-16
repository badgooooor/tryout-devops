const express = require('express');
const os = require('os');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/hostname', (req, res) => {
  res.send(`Hello ${os.hostname()} ${req.ip}`);
});

var server = app.listen(3000, () => {
  console.log("Listening on port " + server.address().port + "...");
});

var exports = module.exports = {};
exports.close = function () {
  server.close();
}