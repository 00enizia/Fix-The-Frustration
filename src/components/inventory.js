import {
components
}
from "../../data/components.js";


import {
makeDraggable
}
from "./drag.js";





export function loadInventory(){



const categoryButtons =
document.querySelectorAll(
".category-buttons button"
);





categoryButtons.forEach(button=>{



button.addEventListener(
"click",

()=>{


const category =
button.dataset.category;



displayComponents(
category
);



}

);



});



}









function displayComponents(category){



const container =
document.getElementById(
"items"
);




container.innerHTML="";






if(!components[category]){


container.innerHTML=
"<p>No components available</p>";

return;


}






components[category]
.forEach(component=>{





const item =
document.createElement(
"div"
);





item.className =
"component-item";



item.draggable=true;





// send data to drag.js


item.dataset.id =
component.id;



item.dataset.name =
component.name;



item.dataset.icon =
component.icon;



item.dataset.type =
component.type;



item.dataset.allowed =
JSON.stringify(
component.allowedSections
);







item.innerHTML=

`

<h3>

${component.icon}

</h3>


<p>

${component.name}

</p>


<small>

Drag me

</small>

`;







makeDraggable(
item
);






container.appendChild(
item
);




});



}