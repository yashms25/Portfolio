/*toggle nav btn*/

console.log('Hello Dcoder')
let menu = document.getElementById('menu-btn');
let close = document.getElementById('close-btn');
let nav = document.getElementsByClassName("nav-menu");
menu.addEventListener("click",()=>{
  console.log("click menu")
  nav[0].style.opacity = 1;
  nav[0].style.zIndex = 999;
})
close.addEventListener("click",()=>{
  nav[0].style.opacity = 0;
  nav[0].style.zIndex = -1;
})

/*toggle end*/
/*about section tabs*/
const aboutsection = document.querySelector(".about-section");
const tabcontainer = document.querySelector(".about-tabs");
tabcontainer.addEventListener("click",(e)=>{
  if(e.target.classList.contains("tab-item") && !e.target.classList.contains("active")){
    const target = event.target.getAttribute("data-target");
    tabcontainer.querySelector(".active").classList.remove("outer-shadow","active");
    event.target.classList.add("active","outer-shadow");
    aboutsection.querySelector(".tab-content.active").classList.remove("active");
    aboutsection.querySelector(target).classList.add("active");
    
  }
})

