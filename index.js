import projects from "./projects.js";

const openMenuBtn = document.querySelector(".menu-btn");
const closeMenuBtn = document.querySelector(".close-menu-btn");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuItems = mobileMenu.querySelectorAll("li");
const worksSection = document.querySelector(".works-section");

// Generate projects
let btnId = 0;
const createProjects = (projectsArray1) => {
  for (const project of projectsArray1) {
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
            <button id=${btnId} class="see-project" aria-label="See project">
              See project
            </button>
          </div>`;

    btnId++;
    worksSection.appendChild(articleEl);
  }
};

createProjects(projects);

// Generate project popup cards
let closeBtnId = 0;

const createProjectPopupCards = (projectsArray2) => {
  for (const project of projectsArray2) {
    const projectContainerPopup = document.createElement("div");

    projectContainerPopup.classList.add("project-container");
    projectContainerPopup.innerHTML = `
    <article class="project-popup">
          <div class="project-content">
            <h2 class="project-title">${project.name}</h2>
            <button id="close-${closeBtnId}" class="close-popup-btn">
            <img src="./icons/close-popup.svg" alt="close icon">
            </button>
            <div class="project-info">
              <p class="company">${project.company}</p>
              <p class="scope">${project.scope}</p>
              <p class="year">${project.year}</p>
            </div>
          <img
            src="images/projects/${project.image}"
            alt=${project.altText}
          />
            <p class="project-description">
             ${project.details}
            </p>
            <ul class="stacks">
              <li class="label">${project.technologies[0]}</li>
              <li class="label">${project.technologies[1]}</li>
              <li class="label">${project.technologies[2]}</li>
            </ul>
            <hr>
            <div class="buttons-container">
            <a href=${project.liveLink} target="_blank">
              <button class="see-project" aria-label="See live">
                See live
                <img src="./icons/see-live.svg" alt="see live arrow icon">
              </button>
            </a>
            <a href=${project.sourceCode} target="_blank">
              <button class="see-project" aria-label="See source">
                See source
                <img src="./icons/see-source.svg" alt="GitHub icon">
              </button>
            </a>
            </div>
          </div></article>`;
    closeBtnId++;
    document.body.appendChild(projectContainerPopup);
  }
};

createProjectPopupCards(projects);

// Open project popup
const seeProjectBtns = [...document.querySelectorAll(".see-project")];
const projectPopups = [...document.querySelectorAll(".project-container")];

seeProjectBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    projectPopups[btn.id].style.display = "block";
    document.body.style.position = "fixed";
  });
});

// Close project popup
const closePopupBtns = [...document.querySelectorAll(".close-popup-btn")];

closePopupBtns.forEach((closeBtn) => {
  closeBtn.addEventListener("click", () => {
    const idOfCloseBtn = closeBtn.id.charAt(closeBtn.id.length - 1);
    projectPopups[idOfCloseBtn].style.display = "none";
    document.body.style.position = "static";
  });
});

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
const handleResizeForMenu = () => {
  const breakpoint = 768;

  projectPopups.forEach((popup) => {
    popup.style.display = "none";
    document.body.style.position = "static";
  });

  if (window.innerWidth > breakpoint) {
    if (mobileMenu.classList.contains("open-menu")) closeMenu();
  }
};

window.addEventListener("resize", handleResizeForMenu);
