function showBreadcrumb() {
  const breadcrumb = document.querySelector("#breadcrumb");

  if (!breadcrumb) return;

  breadcrumb.classList.remove("is-hidden");

  const links = breadcrumb.querySelectorAll("ul li a");
  const currentPath = window.location.pathname;

  let currentIndex = -1;

  // Find the current breadcrumb index by matching the href
  links.forEach((link, index) => {
    if (link.getAttribute("href") === currentPath) {
      currentIndex = index;
    }
  });

  // If no match, assume last item is current
  if (currentIndex === -1) {
    currentIndex = links.length - 1;
  }

  links.forEach((link, index) => {
    // ---- PAST PAGES (clickable) ----
    if (index < currentIndex) {
      link.classList.add("has-text-white", "has-text-weight-bold");
      link.style.pointerEvents = "auto";
      return;
    }

    // ---- CURRENT PAGE ----
    if (index === currentIndex) {
      link.classList.remove("has-text-white");
      link.classList.add("has-text-black", "has-text-weight-bold");
      link.removeAttribute("href");
      link.style.cursor = "default";
      return;
    }

    // ---- FUTURE PAGES (disabled) ----
    if (index > currentIndex) {
      link.classList.remove("has-text-white");
      link.classList.add("has-text-grey");
      link.removeAttribute("href");
      link.style.pointerEvents = "none";
      link.style.cursor = "not-allowed";
    }
  });
}

window.showBreadcrumb = showBreadcrumb;