const hamburger =
document.getElementById('hamburger');
const navLinks =
document.getElementById('navLinks');
const overlay =
document.getElementById('overlay');
const closeBtn =
document.getElementById("closeBtn")


hamburger.addEventListener("click", () => {
  navLinks.classList.add("active");
  hamburger.classList.add("active");
  overlay.classList.toggle('active')
});

function closeMenu () {
navLinks.classList.remove("active");
hamburger.classList.remove("active");
overlay.classList.remove("active")
};
closeBtn.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);


 
