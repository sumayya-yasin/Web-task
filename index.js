// index.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from Express on Vercel!');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
const server = require("./index");
module.exports = server;
