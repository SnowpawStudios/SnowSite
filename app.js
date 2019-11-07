const navBtn = document.querySelector(".navBtn");
const nav = document.querySelector(".nav");

navBtn.addEventListener("click", function () {
  console.log("clicked");
  nav.classList.toggle("nav-show");
});