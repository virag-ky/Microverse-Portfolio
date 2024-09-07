import projects from "./projects.js";

const openMenuBtn = document.querySelector(".menu-btn");
const closeMenuBtn = document.querySelector(".close-menu-btn");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuItems = mobileMenu.querySelectorAll("li");
const worksSection = document.querySelector(".works-section");

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

  if (window.innerWidth > breakpoint) {
    if (mobileMenu.classList.contains("open-menu")) closeMenu();
  }
};

window.addEventListener("resize", handleResize);

// Generate projects
const createProjects = (projectsArray) => {
  for (const project of projectsArray) {
    const articleEl = document.createElement("article");
    articleEl.classList.add("project");
    articleEl.innerHTML = `<img
            src="images/projects/${project.image}"
            alt=${project.altText}
          />
          <div class="project-content">
            <h2 class="project-title">${project.name}</h2>
            <div class="project-info">
              <p class="company">${project.company}</p>
              <p class="scope">${project.scope}</p>
              <p class="year">${project.year}</p>
            </div>
            <p class="project-description">
             ${project.description}
            </p>
            <ul class="stacks">
              <li class="label">${project.technologies[0]}</li>
              <li class="label">${project.technologies[1]}</li>
              <li class="label">${project.technologies[2]}</li>
            </ul>
            <button class="see-project" aria-label="See project">
              See project
            </button>
          </div>`;

    worksSection.appendChild(articleEl);
  }
};

createProjects(projects);
