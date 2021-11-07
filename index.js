/*toggle nav btn*/

let menu = document.getElementById('menu-btn');
let close = document.getElementById('close-btn');
let nav = document.getElementsByClassName("nav-menu");
menu.addEventListener("click", () => {
  console.log("click menu")
  nav[0].style.opacity = 1;
  nav[0].style.zIndex = 999;
})
close.addEventListener("click", () => {
  nav[0].style.opacity = 0;
  nav[0].style.zIndex = -1;
})

/*toggle end*/
/*about section tabs*/
const aboutsection = document.querySelector(".about-section");
const tabcontainer = document.querySelector(".about-tabs");
tabcontainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("tab-item") && !e.target.classList.contains("active")) {
    const target = e.target.getAttribute("data-target");
    tabcontainer.querySelector(".active").classList.remove("outer-shadow", "active");
    e.target.classList.add("active", "outer-shadow");
    aboutsection.querySelector(".tab-content.active").classList.remove("active");
    aboutsection.querySelector(target).classList.add("active");
  }
})

function scrollingtoggle() {
  document.body.classList.toggle("hidden-scrolling");
}


/* project filter and popup*/

const filterContainer = document.querySelector(".project-filter");
const projectItemsContainer = document.querySelector(".project-items");
const projectItems = document.querySelectorAll(".project-item");
const popup = document.querySelector(".project-popup");
const prevBtn = popup.querySelector(".pp-prev");
const nextBtn = popup.querySelector(".pp-next");
const closeBtn = popup.querySelector(".pp-close");
const projectDetailsContainer = popup.querySelector(".pp-details");
const projectDetailsBtn = popup.querySelector(".pp-project-details-btn");
let itemIndex, slideIndex, screenshots;

/*filter project items*/

filterContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("filter-item") && !e.target.classList.contains("active")) {
    filterContainer.querySelector(".active").classList.remove("outer-shadow", "active");
    e.target.classList.add("active", "outer-shadow");
    const target = e.target.getAttribute("data-target");
    projectItems.forEach((item) => {
      if (target === item.getAttribute("data-category") || target === "All") {
        item.classList.remove("hide");
        item.classList.add("show");
      }
      else {
        item.classList.remove("show");
        item.classList.add("hide");
      }

    })
  }
})

projectItemsContainer.addEventListener("click", (e) => {
  if (e.target.closest(".project-item-inner")) {
    const projectItem = e.target.closest(".project-item-inner").parentElement;
    itemIndex = Array.from(projectItem.parentElement.children).indexOf(projectItem);
    screenshots = projectItems[itemIndex].querySelector(".project-item-img img").getAttribute("data-screenshots");
    screenshots = screenshots.split(",");
    if (screenshots.length === 1) {
      prevBtn.style.display = "none";
      nextBtn.style.display = "none";
    }
    else {
      prevBtn.style.display = "block";
      nextBtn.style.display = "block";
    }
    slideIndex = 0;
    popuptoggle();
    popupslideshow();
    popupDetails();
  }
})

closeBtn.addEventListener("click", () => {
  popuptoggle();
  if (projectDetailsContainer.classList.contains('active')) {
    popupDetailsToggle();
  }
})

function popuptoggle() {
  popup.classList.toggle("open");
  scrollingtoggle();
}

function popupslideshow() {
  const imgsrc = screenshots[slideIndex];
  const popupImg = popup.querySelector(".pp-img");
  popup.querySelector(".pp-loader").classList.add("active");
  popupImg.src = imgsrc;
  popupImg.onload = () => {
    popup.querySelector(".pp-loader").classList.remove("active");
  }
  popup.querySelector(".pp-counter").innerHTML = (slideIndex + 1) + " of " + screenshots.length;
}

nextBtn.addEventListener("click", () => {
  if (slideIndex === screenshots.length - 1) {
    slideIndex = 0;
  }
  else {
    slideIndex++;
  }
  popupslideshow();
})

prevBtn.addEventListener("click", () => {
  if (slideIndex === 0) {
    slideIndex = screenshots.length - 1;
  }
  else {
    slideIndex--;
  }
  popupslideshow();
})

function popupDetails() {
  const details = projectItems[itemIndex].querySelector(".project-item-details").innerHTML;
  popup.querySelector(".pp-project-details").innerHTML = details;
  const title = projectItems[itemIndex].querySelector(".project-item-title").innerHTML;
  popup.querySelector(".pp-title h2").innerHTML = title;
  const category = projectItems[itemIndex].getAttribute("data-category");
  popup.querySelector(".pp-project-category").innerHTML = category;
  
}

projectDetailsBtn.addEventListener("click", () => {
  popupDetailsToggle();
})

function popupDetailsToggle() {
  if (projectDetailsContainer.classList.contains('active')) {
    projectDetailsBtn.querySelector("i").classList.remove("fa-minus");
    projectDetailsBtn.querySelector("i").classList.add("fa-plus");
    projectDetailsContainer.classList.remove("active");
    projectDetailsContainer.style.maxHeight = 0 + "px";
  }
  else {
    projectDetailsContainer.classList.add("active");
    projectDetailsBtn.querySelector("i").classList.add("fa-minus");
    projectDetailsBtn.querySelector("i").classList.remove("fa-plus");
    projectDetailsContainer.style.maxHeight = projectDetailsContainer.scrollHeight + "px";
    popup.scrollTo(0, projectDetailsContainer.offsetTop);
  }
}

// hide all sections except active
const sections = document.querySelectorAll(".section");
sections.forEach((section)=>{
if(!section.classList.contains("active")){
  section.classList.add("hide");
}
})

