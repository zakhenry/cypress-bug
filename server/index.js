const express = require('express');
const path = require('path')
const app = express();
const api = express();

// API
api.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT');
  next();
})

api.put('/', (req, res) => {
  res.redirect(307, '/hello');
});


api.put('/hello', (req, res) => res.send('Hello World!'));
api.listen(3001, () => console.log('Example api listening on port 3001!'));


// APP
app.use('/', express.static(path.join(__dirname, '../app'), {
  setHeaders: (res) => {
    res.header('Access-Control-Allow-Origin', '*');
  }
}));

app.listen(3000, () => console.log('Example app listening on port 3000!'));
