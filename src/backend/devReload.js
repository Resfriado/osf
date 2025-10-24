const path = require("path");
const livereload = require("livereload");
const connectLivereload = require("connect-livereload");

function setupDevReload(app) {
  try {
    // Cria servidor LiveReload
    const liveReloadServer = livereload.createServer({
      exts: ['html', 'css', 'js'],
      delay: 100,
    });

    // Observa a pasta frontend
    liveReloadServer.watch(path.join(__dirname, "../frontend"));

    // Middleware para injetar script do livereload
    app.use(connectLivereload());

    // Loga quando o navegador se conecta
    liveReloadServer.server.on("connection", () => {
//      console.log('⌛️ - Página recarregada');
    });
      console.log('\n✅ - LiveReload conectado');
  } catch (err) {
    console.error('❌ - LiveReload conectado: \x1b[31m', err.message , '\x1b[0m\n');
  }
}

module.exports = setupDevReload;
