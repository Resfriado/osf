// ---------------------------
// Configuração de ambiente antes de qualquer require
// ---------------------------
process.env.DOTENV_LOG = "false";
require('dotenv').config({ override: true });

// ---------------------------
// Importa a aplicação
// ---------------------------
const app = require('./app');

// ---------------------------
// Inicializa o servidor
// ---------------------------
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ - Servidor conectado: \x1b[34mhttp://localhost:${PORT}\x1b[0m`);
});