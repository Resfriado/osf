module.exports = {
  findByEmail: `
    SELECT id FROM usuario WHERE email = ? LIMIT 1;
  `
};