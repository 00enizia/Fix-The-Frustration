import {loadCategory} from "./src/components/category.js";
import {enableDrop} from "./src/components/drop.js";
import {testDesign} from "./src/components/tester.js";



document.querySelectorAll(".category button")
.forEach(button=>{


button.onclick=()=>{


let category=
button.dataset.category;


loadCategory(category);


};


});



document
.getElementById("test")
.onclick=testDesign;



enableDrop();