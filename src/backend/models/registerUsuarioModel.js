const db = require('../core/config/dbConnection');
const emailQuery = require('../database/queries/findByEmailQuery.js');
const query = require('../database/queries/registerUsuarioQuery.js');

async function findByEmail(email) {
  const [rows] = await db.promise().query(emailQuery.findByEmail, [email]);
  return rows[0];
}

async function registerNewUser(nome, email, senhaHash) {

  // 1️⃣ Insert into pessoa
  const [pessoaResult] = await db.promise().query(
    query.insertPessoa,
    [nome]
  );

  const pessoaId = pessoaResult.insertId;

  // 2️⃣ Insert into usuario
  const [usuarioResult] = await db.promise().query(
    query.insertUsuario,
    [pessoaId, email, senhaHash]
  );

  return usuarioResult;
}

module.exports = { findByEmail, registerNewUser };
