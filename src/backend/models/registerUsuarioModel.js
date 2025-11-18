const db = require('../core/config/dbConnection');
const { findByEmail: qEmail } = require('../database/queries/findByEmailQuery.js');
const query = require('../database/queries/registerUsuarioQuery.js');

async function findByEmail(email) {
  const [rows] = await db.promise().query(qEmail, [email]);
  return rows[0];
}

async function registerNewUser(nome, email, senhaHash) {
  const [pessoa] = await db.promise().query(query.insertPessoa, [nome]);
  await db.promise().query(query.insertUsuario, [pessoa.insertId, email, senhaHash]);
}

module.exports = { findByEmail, registerNewUser };