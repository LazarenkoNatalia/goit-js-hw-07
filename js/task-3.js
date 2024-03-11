const inputEl = document.querySelector("#name-input");
let  spanEl = document.querySelector("#name-output");

inputEl.addEventListener("input", handleInput)

function handleInput(event) {
     let name = event.target.value;
   (name.trim().length === 0) ? 
        spanEl.innerHTML = "Anonym":
        spanEl.innerHTML = `${name}`;
   }



// inputEl.addEventListener("blur", handleBlur)

// function handleBlur(event) {
//     let name = event.target.value;
//   (name.trim().length === 0) ? 
//         spanEl.innerHTML = "Anonym":
//         spanEl.innerHTML = `${name}`;
    
  
//  }



