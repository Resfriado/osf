const express = require('express');
const fs = require('fs');
const path = require('path');
const db = require('./src/database/config/db');
const home = require('./src/backend/routes/home.js');
const auth = require('./src/backend/routes/auth.js');
const pricing = require('./src/backend/routes/pricing.js');
const team = require('./src/backend/routes/team.js');
const booking = require('./src/backend/routes/booking.js');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./src/backend/utils/static.js')(app);

if (process.env.NODE_ENV !== 'production') {
  const setupLiveReload = require('./src/backend/utils/devReload.js');
  setupLiveReload(app);
}

const route = '/home';
const newPath = 'src/frontend/pages/home/index.html';

app.get('/', (req, res) => {
  res.redirect(route);
});

app.get(route, (req, res) => {
  fs.readFile(newPath, 'utf8', (err, html) => {
    if (err) return res.status(500).send('Erro ao carregar a página');
    res.send(html);
  });
});

app.use('/', home);
app.use('/', auth);
app.use('/', pricing);
app.use('/', team);
app.use('/', booking);

module.exports = app;
