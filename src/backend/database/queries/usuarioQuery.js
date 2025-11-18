module.exports = {
  findByEmailAndSenha: `
    SELECT * FROM usuario
    WHERE email = ? AND senha = ?
    LIMIT 1;
  `,
};