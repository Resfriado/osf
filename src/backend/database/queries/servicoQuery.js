module.exports = {
  getAll: `
    SELECT 
      s.id,
      s.nome,
      s.descricao,
      s.duracao,
      s.preco,
      c.categoria AS categoria
    FROM servico s
    JOIN categoria c ON c.id = s.categoria_id;
  `,

  getById: `
    SELECT 
      s.id,
      s.nome,
      s.descricao,
      s.duracao,
      s.preco,
      c.categoria AS categoria
    FROM servico s
    JOIN categoria c ON c.id = s.categoria_id
    WHERE s.id = ?;
  `
};