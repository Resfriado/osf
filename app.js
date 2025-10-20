const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const db = require('./src/database/config/db');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 2800;

// Para processar formulários
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve arquivos estáticos da pasta public
app.use('/public', express.static(path.join(__dirname, 'src/frontend/pages/public')));

// Redireciona a raiz "/" para a página de login
app.get('/', (req, res) => {
  res.redirect('/login');
});

// Rota GET para exibir o login
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/frontend/pages/auth/index.html'));
});

// Rota POST para processar o login
app.post('/login', (req, res) => {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.send(`<h3 style="color:red;">E-mail ou senha inválida</h3><a href="/login">Voltar</a>`);
  }

  const senhaHash = require('crypto').createHash('md5').update(senha).digest('hex');

  const sql = 'SELECT * FROM usuario WHERE email = ? AND senha = ?';
  db.query(sql, [email, senhaHash], (err, results) => {
    if (err) return res.send('Erro no banco de dados.');

    if (results.length === 0) {
      return res.send(`<h3 style="color:red;">Email ou senha inválida</h3><a href="/login">Voltar</a>`);
    }

    const user = results[0];
    if (user.ativo === 0) {
      return res.send(`<h3 style="color:orange;">Usuário bloqueado. Contate o administrador.</h3><a href="/login">Voltar</a>`);
    }

    // Login bem-sucedido: envia o HTML da home
    res.sendFile(path.join(__dirname, 'src/frontend/pages/home/index.html'));
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
