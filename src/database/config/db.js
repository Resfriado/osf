const mysql = require('mysql2');
const DB_NAME = process.env.DB_NAME;
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

connection.connect(err => {
  if (err) {
    console.error('❌ - Banco conectado: \x1b[31m', err.message , '\x1b[0m\n');
    return;
  }
  console.log('✅ - Banco conectado: \x1b[93m', DB_NAME ,'\x1b[0m\n');
});

module.exports = connection;