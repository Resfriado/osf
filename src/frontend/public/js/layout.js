function loadPartial(id, url) {
  fetch(url)
    .then(res => res.text())
    .then(html => {
      const container = document.getElementById(id);
      if (container) {
        container.innerHTML = html;

        document.dispatchEvent(new Event(id + "-loaded"));
      }
    })
    .catch(err => console.error(`Erro ao carregar ${url}:`, err));
}

document.addEventListener("DOMContentLoaded", () => {
  loadPartial("header-placeholder", "/public/partials/header.html");
  loadPartial("footer-placeholder", "/public/partials/footer.html");
});
