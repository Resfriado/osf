(function () {
  const pathname = window.location.pathname;
  let pageFolder = "default";

  // 🔍 Mapeamento manual entre rotas e pastas
  const routeMap = {
    "/home": "home",
    "/auth": "auth",
    "/pricing": "pricing",
    "/booking": "booking",
    "/test": "test",
  };

  // Determina qual pasta CSS usar
  if (routeMap[pathname]) {
    pageFolder = routeMap[pathname];
  }

  // Função para injetar CSS
  function injectLink(href) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    link.onload = () => console.log(`✅ CSS carregado: ${href}`);
    link.onerror = () => console.warn(`⚠️ Erro ao carregar CSS: ${href}`);
    document.head.appendChild(link);
  }

  // Função para injetar JS
  function injectScript(src, defer = true) {
    const script = document.createElement("script");
    script.src = src;
    script.defer = defer;
    script.onload = () => console.log(`✅ Script carregado: ${src}`);
    script.onerror = () => console.warn(`⚠️ Erro ao carregar script: ${src}`);
    document.head.appendChild(script);
  }

  // 🧩 CSS globais
  injectLink("/public/assets/bootstrap/bootstrap.min.css");
  injectLink("/public/assets/sweetalert2/sweetalert2.min.css");
  injectLink("/public/assets/jcalendar.js/jcalendar.js.css");
  
  // 🧩 CSS específico da página
  injectLink(`/public/css/${pageFolder}.css`);
  injectLink(`/public/partials/css/header.css`);
  injectLink(`/public/partials/css/footer.css`);

  

  // 🧩 Scripts globais
  injectScript("/public/assets/sweetalert2/sweetalert2.min.js");
  injectScript("/public/assets/jcalendar.js/jcalendar.min.js");

  console.log(`📄 Página detectada: ${pageFolder}`);
})();
