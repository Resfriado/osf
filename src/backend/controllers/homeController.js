const crypto = require('crypto');
const usuarioModel = require('../models/usuarioModel');

async function login(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new Error('\x1b[0mCampos obrigatórios ausentes');
    }

    const passwordHash = crypto.createHash('md5').update(password).digest('hex');
    const user = await usuarioModel.findByEmailAndSenha(email, passwordHash);

    console.log('🛐 - Trying:\x1b[93m', email , '\b\x1b[0m,\x1b[93m' , passwordHash , '\x1b[0m');
    if (!user) throw new Error('\x1b[0mUsuário não encontrado ou senha incorreta');
    if (user.ativo === 0) throw new Error('\x1b[0mUsuário bloqueado');

    console.log(`✅ - Login: \x1b[92m${email}\x1b[0m\n`);
    return res.redirect('/pricing');

  } catch (err) {
    console.error('❌ - Login: \x1b[31m$', err ,'\x1b[0m\n');
    return res.redirect('/auth?error=db');
  }
}

module.exports = { login };
