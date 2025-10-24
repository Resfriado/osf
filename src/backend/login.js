const express = require('express');
const path = require('path');
const crypto = require('crypto');
const db = require('../database/config/db'); // ajusta o caminho conforme sua pasta
const router = express.Router();

// Caminho para o HTML da home (pode vir por parâmetro também)
const pricingPath = 'src/frontend/pages/shop/pricing/index.html';
const pricing = '/pricing';

// Rota POST para processar o login
router.post('/login', (req, res) => {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.redirect(`/login?error=missing`);
  }

  const senhaHash = crypto.createHash('md5').update(senha).digest('hex');

  const sql = 'SELECT * FROM usuario WHERE email = ? AND senha = ?';
  db.query(sql, [email, senhaHash], (err, results) => {
    if (err) {
      console.error(err);
      return res.redirect('/login?error=db');
    }

    if (results.length === 0) {
      return res.redirect(`/login?error=invalid`);
    }

    const user = results[0];
    if (user.ativo === 0) {
      return res.redirect(`/login?error=blocked`);
    }

    // ✅ Login bem-sucedido → redireciona para /home
    return res.redirect('/pricing');
  });
});

// ✅ Nova rota GET para /home (exibe a página home)
router.get(pricing, (req, res) => {
  res.sendFile(path.join(__dirname, '../../', pricingPath));
});

module.exports = router;
