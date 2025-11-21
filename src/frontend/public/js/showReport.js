function showReport() {
  fetch("/session/info")
    .then(res => res.json())
    .then(data => {
      const dashboardDiv = document.getElementById("report");
      if (!dashboardDiv) return;

      if (data.cargo === "admin") {
        dashboardDiv.classList.remove("is-hidden");
      }
    })
    .catch(err => {
      console.warn("Erro ao obter sessão:", err);
    });
}

window.showReport = showReport;