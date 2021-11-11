const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");
styleSwitcherToggler.addEventListener("click", () => {
  document.querySelector(".style-switcher").classList.toggle("open");
});

window.addEventListener("scroll", () => {
  if (document.querySelector(".style-switcher").classList.contains("open")) {
    document.querySelector(".style-switcher").classList.remove("open");
  }
});

// style changer
const alternatestyle = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
  alternatestyle.forEach((style) => {
    if (color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", "true");
    }
  });
}
// dark light mode
const daynight = document.querySelector(".day-night");

daynight.addEventListener("click", () => {
  daynight.querySelector("i").classList.toggle("fa-sun-o");
  daynight.querySelector("i").classList.toggle("fa-moon-o");
  document.body.classList.toggle("dark");
});
window.addEventListener("load", () => {
  if (document.body.classList.contains("dark")) {
    daynight.querySelector("i").classList.add("fa-sun-o");
  } else {
    daynight.querySelector("i").classList.add("fa-moon-o");
  }
});
