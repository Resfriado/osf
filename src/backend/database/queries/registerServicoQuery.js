module.exports = {
  insertServico: `
    INSERT INTO servico (categoria_id, nome, descricao, duracao, preco)
    VALUES (?, ?, ?, ?, ?);
  `
};