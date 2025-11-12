function loadPartial(id, url, callback) {
  fetch(url)
    .then((res) => res.text())
    .then((html) => {
      const container = document.getElementById(id);
      if (container) container.innerHTML = html;
      if (callback) callback();
    })
    .catch((err) => console.error(`Erro ao carregar ${url}:`, err));
}

// 🔹 Ativa o botão do header (login/logout)
function setupHeaderButton() {
  const btn = document.getElementById("header-action-btn");
  if (!btn) return;

  const path = window.location.pathname;
  const buttonMap = {
    "/home": {
      text: "Login",
      classAdd: "bg-success",
      classRemove: "bg-danger",
      action: () => (window.location.href = "/auth"),
      visible: true,
    },
    "/auth": {
      visible: false,
    },
  };

  let config = {
    text: "Logout",
    classAdd: "bg-danger",
    classRemove: "bg-success",
    action: () => (window.location.href = "/home"),
    visible: true,
  };

  if (buttonMap[path]) config = { ...config, ...buttonMap[path] };

  btn.style.display = config.visible ? "inline-block" : "none";
  if (config.visible) {
    btn.textContent = config.text;
    btn.classList.remove(config.classRemove);
    btn.classList.add(config.classAdd);
    btn.onclick = config.action;
  }
}

// 🧩 Carrega o header e o footer
loadPartial("header-placeholder", "/public/partials/header.html", () => {
  setupHeaderButton();
  requestAnimationFrame(() => setupDropdownWidth());
});

loadPartial("footer-placeholder", "/public/partials/footer.html");


// 🔧 Ajusta a largura do menu e dropdown para coincidir com os itens
function setupDropdownWidth() {
  const dropdownWrappers = document.querySelectorAll('.navbar-item.has-dropdown');
  if (!dropdownWrappers.length) return;

  dropdownWrappers.forEach(ddWrap => {
    const link = ddWrap.querySelector('.navbar-link');
    const dropdown = ddWrap.querySelector('.navbar-dropdown');
    const items = dropdown ? Array.from(dropdown.querySelectorAll('.navbar-item')) : [];

    if (!dropdown || items.length === 0 || !link) return;

    // Temporariamente exibe o dropdown para medir (invisível)
    const origDisplay = dropdown.style.display;
    const origVisibility = dropdown.style.visibility;
    const origPosition = dropdown.style.position;

    dropdown.style.display = 'block';
    dropdown.style.visibility = 'hidden';
    dropdown.style.position = 'absolute';

    let max = 0;
    items.forEach(i => {
      i.style.whiteSpace = 'nowrap';
      const rect = i.getBoundingClientRect();
      if (rect.width > max) max = rect.width;
    });

    // Restaura estilos originais
    dropdown.style.display = origDisplay;
    dropdown.style.visibility = origVisibility;
    dropdown.style.position = origPosition;

    // Define largura final (um pequeno buffer de 6px)
    const finalWidth = Math.ceil(max) + 6;

    link.style.width = finalWidth + 'px';
    link.style.display = 'inline-block';
    dropdown.style.minWidth = finalWidth + 'px';
    dropdown.style.width = 'auto';

    // Garante que os itens usem 100% da largura do dropdown
    items.forEach(i => {
      i.style.display = 'block';
      i.style.width = '100%';
    });
  });
}
