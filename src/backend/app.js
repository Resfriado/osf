const express = require('express');
const fs = require('fs');
const session = require('./routes/admin/sessionRoute.js');
const login = require('./routes/global/loginRoute.js');
const register = require('./routes/global/registerRoute.js')
const home = require('./routes/global/homeRoute.js');
const dashboard = require('./routes/admin/dashboardRoute.js');
const services = require('./routes/admin/servicesRoute.js');
const employees = require('./routes/admin/employeesRoute.js');

const pricing = require('./routes/global/pricingRoute.js');
const team = require('./routes/global/teamRoute.js');
const booking = require('./routes/global/bookingRoute.js');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./core/middleware/static.js')(app);

if (process.env.NODE_ENV !== 'production') {
  const setupLiveReload = require('./core/utils/liveReload.js');
  setupLiveReload(app);
}

const sessionMiddleware = require('./core/middleware/session.js');
app.use(sessionMiddleware);

const route = '/login';
const newPath = 'src/frontend/pages/auth/login/index.html';

app.get('/', (req, res) => {
  res.redirect(route);
});

app.get(route, (req, res) => {
  fs.readFile(newPath, 'utf8', (err, html) => {
    if (err) return res.status(500).send('Erro ao carregar a página');
    res.send(html);
  });
});

app.use('/', session);
app.use('/', login);
app.use('/', register);
app.use('/', home);
app.use('/', dashboard);
app.use('/', services);
app.use('/', employees);

app.use('/', pricing);
app.use('/', team);
app.use('/', booking);

module.exports = app;