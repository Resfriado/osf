// src/database/config/db.js
const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

connection.connect(err => {
  if (err) {
    console.error('Erro na conexão com o banco:', err.message);
    return;
  }
  console.log('✅ Conectado ao banco de dados com sucesso!');
});

module.exports = connection;