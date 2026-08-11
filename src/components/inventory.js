import {components}
from "../../data/components.js";


import {
makeDraggable
}
from "./drag.js";





export function loadInventory(){



document
.querySelectorAll(
".category-button"
)
.forEach(button=>{


button.onclick=()=>{


showItems(
button.dataset.category
);


};


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



const card =
document.createElement(
"div"
);



card.className =
"inventory-card";



card.draggable=true;



card.dataset.id =
item.id;



card.dataset.name =
item.name;



card.dataset.icon =
item.icon;




card.innerHTML=

`

<h2>
${item.icon}
</h2>

<p>
${item.name}
</p>

<small>
Drag me
</small>

`;



makeDraggable(card);



container.appendChild(card);



});



}