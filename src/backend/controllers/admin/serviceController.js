const model = require("../../models/servicoModel");
const registerModel = require("../../models/registerServicoModel");

exports.getAll = async (req, res) => {
  try {
    const servicos = await model.getAll();
    res.json(servicos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao buscar servico" });
  }
};

exports.getById = async (req, res) => {
  try {
    const servico = await model.getById(req.params.id);
    res.json(servico);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao buscar servico" });
  }
};
exports.register = async function (req, res) {
  try {
    const { categoria, nome, descricao, duracao, preco } = req.body;

    await registerModel.registerNewService(categoria, nome, descricao, duracao, preco);

    console.log(`✅ - Service: \x1b[92m${categoria}\x1b[0m, \x1b[92m${nome}\x1b[0m, \x1b[92m${descricao}\x1b[0m, \x1b[92m${duracao}\x1b[0m, \x1b[92m${preco}\x1b[0m\n`);
    return res.redirect("/services");

  } catch (err) {
    console.error('❌ - Service: \x1b[31m$', err ,'\x1b[0m\n');
    return res.status(500).send("Erro ao registrar servico.");
  }
};