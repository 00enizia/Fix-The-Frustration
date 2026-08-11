import {components} 
from "../../data/components.js";



import {
createDragItem
}
from "./drag.js";




export function loadCategories(){



const buttons =
document.querySelectorAll(
"#category-buttons button"
);



buttons.forEach(button=>{


button.onclick=()=>{


let category =
button.dataset.category;



showItems(category);


}



});



}





function showItems(category){


const container =
document.getElementById(
"inventory-items"
);



container.innerHTML="";



components[category]
.forEach(item=>{


let div =
document.createElement(
"div"
);



div.className=
"inventory-item";



div.draggable=true;



div.dataset.name=
item.name;



div.innerHTML=
`

${item.icon}

<br>

${item.name}

`;



createDragItem(div);



container.appendChild(div);



});



}