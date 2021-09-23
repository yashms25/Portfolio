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
