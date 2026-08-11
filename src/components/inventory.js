import {
    components
}
from "../../data/components.js";


import {
    makeDraggable
}
from "./drag.js";







export function loadInventory(){



const buttons =
document.querySelectorAll(
".category-buttons button"
);






buttons.forEach(button=>{


button.addEventListener(
"click",
()=>{


const category =
button.dataset.category;



showComponents(
category
);



}

);



});



}









function showComponents(category){



const container =
document.getElementById(
"items"
);





container.innerHTML="";






const list =
components[category];






if(!list){

container.innerHTML=
"<p>No choices available</p>";

return;

}







list.forEach(component=>{



const item =
document.createElement(
"div"
);





item.className =
"component-item";





item.innerHTML =

`

<h3>

${component.icon}

</h3>


<p>

${component.name}

</p>


<small>

Drag to use

</small>


`;








// send information to drag.js


item.dataset.id =
component.id;



item.dataset.name =
component.name;



item.dataset.type =
component.type;



item.dataset.style =
component.style;



item.dataset.icon =
component.icon;



item.dataset.section =
component.allowedSection;







makeDraggable(
item,
component
);






container.appendChild(
item
);



});



}