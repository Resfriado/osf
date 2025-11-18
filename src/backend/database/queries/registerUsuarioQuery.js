module.exports = {
  insertPessoa: `
    INSERT INTO pessoa (nome)
    VALUES (?);
  `,
  insertUsuario: `
    INSERT INTO usuario (pessoa_id, email, senha)
    VALUES (?, ?, ?);
  `
};