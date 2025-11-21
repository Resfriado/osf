const db = require('../core/config/dbConnection');
const query = require('../database/queries/registerServicoQuery.js');

async function registerNewService(categoriaNome, nome, descricao, duracao, preco) {
  const [categoriaRows] = await db.query(
    'SELECT id FROM categoria WHERE nome = ? LIMIT 1',
    [categoriaNome]
  );

  if (categoriaRows.length === 0) {
    throw new Error(`Categoria '${categoriaNome}' not found`);
  }

  const categoriaId = categoriaRows[0].id;

  await db.query(query.insertServico, [
    categoriaId,
    nome,
    descricao,
    duracao,
    preco
  ]);
}

module.exports = { registerNewService };