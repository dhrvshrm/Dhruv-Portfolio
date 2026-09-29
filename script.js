function toggleMenu() {
  document.querySelector(".nav-links").classList.toggle("open");
  document.querySelector(".ham-icon").classList.toggle("open");
}

function closeMenu() {
  document.querySelector(".nav-links").classList.remove("open");
  document.querySelector(".ham-icon").classList.remove("open");
}
