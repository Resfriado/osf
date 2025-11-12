const express = require('express');
const fs = require('fs');
const home = require('./routes/home.js');
const auth = require('./routes/auth.js');
const pricing = require('./routes/pricing.js');
const team = require('./routes/team.js');
const booking = require('./routes/booking.js');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./core/middleware/static.js')(app);

if (process.env.NODE_ENV !== 'production') {
  const setupLiveReload = require('./core/utils/liveReload.js');
  setupLiveReload(app);
}

const route = '/home';
const newPath = 'src/frontend/pages/test/index.html';

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
