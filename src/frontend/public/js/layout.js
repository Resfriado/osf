function loadPartial(id, url) {
  fetch(url)
    .then(res => res.text())
    .then(html => {
      const container = document.getElementById(id);
      if (container) container.innerHTML = html;
    })
    .catch(err => console.error(`Erro ao carregar ${url}:`, err));
}

// Carregar header e footer
document.addEventListener("DOMContentLoaded", () => {
  loadPartial("header-placeholder", "/public/partials/html/header.html");
  loadPartial("footer-placeholder", "/public/partials/html/footer.html");
});