module.exports = {
  insertServico: `
    INSERT INTO servico (categoria_id, nome, descricao, duracao, preco, foto)
    VALUES (
      (SELECT id FROM categoria WHERE categoria = ? LIMIT 1),
      ?, ?, ?, ?, ?
    );
  `
};