const { showPage } = require("../../core/utils/pageController");
const servicoModel = require("../../models/servicoModel");
const newPath = "src/frontend/pages/admin/components/services/index.html";

exports.page = showPage(newPath, async () => {
  const [services] = await servicoModel.getAll();

  return { services };
});