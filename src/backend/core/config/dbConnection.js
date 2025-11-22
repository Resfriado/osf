const mysql = require('mysql2');
const DB_NAME = process.env.DB_NAME;

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
}).promise();

(async () => {
  try {
    const conn = await pool.getConnection();
    conn.release();

    console.log('│\x1b[0m    •\x1b[93m', DB_NAME ,'\x1b[0m                                           \x1b[90m│');
    console.log('│                                                             │');
    console.log('╰─────────────────────────────────────────────────────────────╯\x1b[0m\n');

  } catch (err) {
    console.error('│\x1b[0m    •\x1b[31m', err.message, '\x1b[0m                        \x1b[90m│');
    console.error('│                                                             │');
    console.error('╰─────────────────────────────────────────────────────────────╯\x1b[0m\n');
    process.exit(1);
  }
})();

module.exports = pool;