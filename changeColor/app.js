const colorBtn = document.querySelector(".colorBtn");
const bodyBk = document.querySelector("body");


const colors = ["yellow", "red", "green", "#3b5998"];

colorBtn.addEventListener("click", changeColor);

function changeColor() {
 let randomColor = Math.floor(Math.random() * colors.length);
 bodyBk.style.backgroundColor = colors[randomColor];
}