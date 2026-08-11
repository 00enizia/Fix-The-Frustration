// src/components/inventory.js


import {
    components
}
from "../../data/components.js";


import {
    renderDesign
}
from "./renderer.js";





let selectedComponents = {};







export function loadInventory(){



const categoryButtons =
document.querySelectorAll(
".category-list button"
);





categoryButtons.forEach(button=>{



button.addEventListener(
"click",
()=>{


const category =
button.dataset.category;



showChoices(
category
);



}

);



});



}









function showChoices(category){



const container =
document.getElementById(
"design-options"
);





container.innerHTML="";






const data =
components[category];






if(!data){

return;

}







const title =
document.createElement(
"h3"
);



title.innerHTML =
data.title;



container.appendChild(
title
);








data.choices.forEach(choice=>{



const card =
document.createElement(
"div"
);





card.className =
"design-choice";





card.dataset.id =
choice.id;





card.innerHTML =

`

<h3>

${choice.icon}

</h3>


<h4>

${choice.name}

</h4>


<p>

${choice.description}

</p>


`;







card.addEventListener(
"click",
()=>{


selectChoice(
category,
choice,
card
);


});







container.appendChild(
card
);



});



}









function selectChoice(
category,
choice,
card
){



// remove active style

document
.querySelectorAll(
".design-choice"
)
.forEach(item=>{


item.classList.remove(
"active"
);


});





card.classList.add(
"active"
);








// save selected design


selectedComponents[category]
=
choice;








// send to renderer


renderDesign(
choice
);



}









export function getSelectedComponents(){


return selectedComponents;


}