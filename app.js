const express = require('express');
const fs = require('fs');
const path = require('path');
const db = require('./src/database/config/db');
const login = require('./src/backend/login.js');
const pricing = require('./src/backend/pricing.js');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./src/backend/static.js')(app);

if (process.env.NODE_ENV !== 'production') {
  const setupLiveReload = require('./src/backend/devReload.js');
  setupLiveReload(app);
}

const auth = '/login';
const testPath = 'src/frontend/pages/test/PLACEHOLDER.html';
const homePath = 'src/frontend/pages/auth/index.html';

app.get('/', (req, res) => {
  res.redirect(auth);
});

app.get(auth, (req, res) => {
  fs.readFile(homePath, 'utf8', (err, html) => {
    if (err) return res.status(500).send('Erro ao carregar a página');
    res.send(html);
  });
});

app.use('/', login);
app.use('/', pricing);

module.exports = app;
