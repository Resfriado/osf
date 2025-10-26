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

// Como o script já é defer, podemos executar direto
loadPartial(
  "header-placeholder",
  "/public/partials/html/header.html",
  setupHeaderButton
);
loadPartial("footer-placeholder", "/public/partials/html/footer.html");
