let boxEl = document.querySelector("#boxes");
let inputEl = document.querySelector("input");
let btnCreateEl = document.querySelector("button[data-create]")
let btnDestroyEl = document.querySelector("button[data-destroy]")
boxEl.style.width = '100%';
boxEl.style.height = '100%';

let value = 0;

let addDiv = "";

inputEl.addEventListener("input", handleInput);

btnCreateEl.addEventListener("click", handleCreate);
btnDestroyEl.addEventListener("click", destroyBoxes);


function handleInput(event) {
   value = Number.parseInt(event.currentTarget.value);
}
 
function handleCreate() {
   boxEl.replaceChildren();
  value > 0 && value <=100
    ? createBoxes(value) : inputEl.value='';
}
function createBoxes(amount) {
  
  for (let i = 0; i < amount; i += 1) {
    addDiv += `<div style = 'background-color: ${getRandomHexColor()};
  width :  ${30+i * 10}px; height :  ${30+ i * 10}px' 
   ></div> `
  }
  
  boxEl.insertAdjacentHTML("beforeend", addDiv);
  addDiv = "";
  inputEl.value='';
 value = 0;
}

function destroyBoxes() {
  boxEl.replaceChildren() 
  value = 0;
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
