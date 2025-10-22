const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');
const db = require('./src/database/config/db');
const login = require('./src/backend/login.js');

dotenv.config();
const app = express();
const PORT = process.env.PORT;
const testPath = 'src/frontend/pages/test/PLACEHOLDER.html';
const authPath = 'src/frontend/pages/auth/index.html';
const auth = '/login';

// Importa LiveReload apenas se estiver em desenvolvimento
if (process.env.NODE_ENV !== 'production') {
  const setupLiveReload = require('./src/backend/devReload.js');
  setupLiveReload(app);
}
// Para processar formulários
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve arquivos estáticos da pasta public
app.use('/public', express.static(path.join(__dirname, 'src/frontend/public')));

app.get('/', (req, res) => { // Redireciona a raiz "/" para a página de login
  res.redirect(auth);
});

app.get(auth, (req, res) => {
  const filePath = path.join(__dirname, authPath);
  fs.readFile(filePath, 'utf8', (err, html) => {
    if (err) return res.status(500).send('Erro ao carregar a página');
    res.send(html);
  });
});

app.use('/', login);

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
