require('dotenv').config({ silent: true });
const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();


app.use('/static', express.static(path.join(__dirname, 'dist/static')));

app.get('/', (req, res) => {
  let template = fs.readFileSync(path.resolve('dist/index.html'), 'utf-8');
  res.send(template);
});

const server = require('http').createServer(app);
var io = require('socket.io')(server);


server.listen(process.env.PORT, function () {
  console.log(`Example app listening on port ${process.env.PORT}!`);
  if (process.env.NODE_ENV === 'development') {
    require("open")(`http://localhost:${process.env.PORT}`);
  }
});
