const openMenuBtn = document.querySelector(".menu-btn");
const closeMenuBtn = document.querySelector(".close-menu-btn");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuItems = mobileMenu.querySelectorAll("li");

// Handle menu - open
const openMenu = () => {
  desktopMenu.classList.toggle("close-menu");
  mobileMenu.classList.toggle("open-menu");
  closeMenuBtn.classList.toggle("show-close-menu-btn");
  document.body.style.position = "fixed";
};

openMenuBtn.addEventListener("click", openMenu);

// Handle menu - close
const closeMenu = () => {
  mobileMenu.classList.toggle("open-menu");
  closeMenuBtn.classList.toggle("show-close-menu-btn");
  document.body.style.position = "static";
};

closeMenuBtn.addEventListener("click", closeMenu);

mobileMenuItems.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

// Handle window resize
const handleResize = () => {
  const breakpoint = 768;

  if (mobileMenu.classList.contains("open-menu")) {
    closeMenu();
  }
};

window.addEventListener("resize", handleResize);
