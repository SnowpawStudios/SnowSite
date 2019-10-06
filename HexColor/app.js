const btn = document.querySelector(".hexBtn");
const body = document.querySelector("body");
const hex = document.querySelector(".hex");
const hexNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];

btn.addEventListener("click", getHex);

function getHex() {
 let hexCol = "#";


 for (let i = 0; i < 6; i++) {
  let random = Math.floor(Math.random() * hexNumbers.length);
  hexCol += hexNumbers[random];
  //console.log(hexCol);
 }
 body.style.backgroundColor = hexCol;
 hex.textContent = hexCol;
}