import { loadCategory } from "./src/components/category.js";
import { enableDrop } from "./src/components/slots.js";


document.querySelectorAll(".category button")
.forEach(button=>{


button.addEventListener("click",()=>{


let category = button.innerText
.replace(/[^\w\s]/gi,"")
.trim();


loadCategory(category);


});


});


enableDrop();