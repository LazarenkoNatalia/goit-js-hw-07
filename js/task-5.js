const btnEl = document.querySelector(".change-color");

const bodyEl = document.querySelector("body");

btnEl.addEventListener("click", handleClick);

function handleClick() {
 
    bodyEl.style.backgroundColor =getRandomHexColor();
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
