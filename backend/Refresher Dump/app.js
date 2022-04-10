/** @format */

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
console.log('Ninda Nai Ati Muje');

app.use(bodyParser.urlencoded({ extended: false }));
app.post('/user', (req, res, next) => {
  res.send('<h1> User :' + req.body.username + '</h1>');
});
app.get('/', (req, res, next) => {
  res.send(
    '<form action="/user" method = "POST" ><input type="text" name = "username"/><button type="submit">Button</button></form>'
  );
});

app.listen(2000);

/*
app.use((req, res, next) => {
  let body = '';
  req.on('end', () => {
    const userName = body.split('=')[1];
    if (userName) {
      req.body = { name: userName };
    }

    next();
  });

  req.on('data', (chunk) => {
    body += chunk;
  });
});
*/
