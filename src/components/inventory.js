// src/components/inventory.js


import {
    components
}
from "../../data/components.js";


import {
    renderDesign
}
from "./renderer.js";





// stores current selections

let selectedDesigns = {};





let currentCategory = null;

let currentFeature = null;









// =====================================
// LOAD CATEGORY BUTTONS
// =====================================


export function loadInventory(){



const buttons =
document.querySelectorAll(
".category-button"
);





buttons.forEach(button=>{


button.addEventListener(
"click",
()=>{


const category =
button.dataset.category;



showFeatures(category);



}

);



});



}









// =====================================
// SHOW FEATURES
// =====================================


function showFeatures(category){



currentCategory = category;



const container =
document.getElementById(
"design-options"
);




container.innerHTML = "";






const categoryData =
components[category];






if(!categoryData)
return;







container.innerHTML = `


<h3>
${categoryData.name}
</h3>


<p>
Choose a feature
</p>


`;








categoryData.features.forEach(feature=>{



const card =
document.createElement(
"div"
);



card.className =
"design-choice";






card.innerHTML = `


<h2>
${feature.name}
</h2>


<p>
Choose style
</p>


`;







card.onclick = ()=>{


showStyles(
category,
feature
);



};






container.appendChild(
card
);



});



}









// =====================================
// SHOW STYLES
// =====================================


function showStyles(
category,
feature
){



currentFeature = feature;



const container =
document.getElementById(
"design-options"
);





container.innerHTML = `



<button
class="back-button"
id="back-button-choice">

← Back

</button>



<h3>
${feature.name}
</h3>


<p>
Choose your design style
</p>


`;









feature.styles.forEach(style=>{



const card =
document.createElement(
"div"
);



card.className =
"design-choice";







// check selected


const saved =
selectedDesigns[feature.key];





if(
saved &&
saved.id === style.id
){


card.classList.add(
"active"
);


}








card.innerHTML = `



<h2>
${style.icon}
</h2>


<h3>
${style.name}
</h3>


<p>
${style.description}
</p>


`;









card.onclick = ()=>{


applyDesign(
category,
feature,
style
);



};







container.appendChild(
card
);



});








document
.getElementById(
"back-button-choice"
)
.onclick = ()=>{


showFeatures(
category
);



};



}









// =====================================
// APPLY DESIGN
// =====================================


function applyDesign(
category,
feature,
style
){



const design = {


category:


category,



feature:


feature.key,



featureName:


feature.name,



style:


style.id,



layout:


style.layout,



icon:


style.icon,



description:


style.description



};









// replace old design

selectedDesigns[
feature.key
]
=
design;









// send to renderer


renderDesign(
design
);








// refresh style selection


showStyles(
category,
feature
);





}









// =====================================
// GET SELECTED DESIGNS
// =====================================


export function getSelectedDesigns(){


return selectedDesigns;


}