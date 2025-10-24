const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('closeBtn');
const closeHome = document.getElementById('closeHome');
const closePjt = document.getElementById('closePjt');
const closeCtn = document.getElementById('closeCtn');

hamburger.addEventListener("click", () => {
  navLinks.classList.add("active");
  hamburger.classList.add("active");
  overlay.classList.add("active");
});

function closeMenu() {
  navLinks.classList.remove("active");
  hamburger.classList.remove("active");
  overlay.classList.remove("active");
}

closeBtn.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);
closeHome.addEventListener("click", closeMenu);
closePjt.addEventListener("click", closeMenu);
closeCtn.addEventListener("click", closeMenu);
navLinks.addEventListener("click", closeMenu)



 
