function hideHeroFoot() {
  const heroFoot = document.querySelector(".hero-foot");
  if (heroFoot) {
    heroFoot.style.display = "none";
  }
}

window.hideHeroFoot = hideHeroFoot;