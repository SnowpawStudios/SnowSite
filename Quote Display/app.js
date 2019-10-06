const quotes = [
 {
  name: "Stephen King",
  quote: "Get busy living or get busy dying"
 },
 {
  name: "Dr. Seuss",
  quote: "Don't cry because it's over, smile because it happened."
 },
 {
  name: "Oscar Wilde",
  quote: "Be yourself; everyone else is already taken."
 },
 {
  name: "Albert Einstein",
  quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."
 },
 {
  name: "Mahatma Gandhi",
  quote: "Be the change that you wish to see in the world."
 },
 {
  name: "Thomas A. Edison",
  quote: "I have not failed. I've just found 10,000 ways that won't work"
 }
]

const quoteBtn = document.querySelector("#quoteBtn");
const quoteAuthor = document.querySelector("#quoteAuthor");
const quote = document.querySelector("#quote");

quoteBtn.addEventListener("click", chooseQuote);
function chooseQuote() {
 let random = Math.floor(Math.random() * quotes.length);
 quote.textContent = quotes[random].quote;
 quoteAuthor.textContent = quotes[random].name;
}