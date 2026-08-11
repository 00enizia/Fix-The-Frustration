// src/components/inventory.js


import {
    components
}
from "../../data/components.js";


import {
    renderDesign
}
from "./renderer.js";





// Stores all selected designs

let selectedDesigns = {};





let currentCategory = "";

let currentFeature = "";









// ======================================
// LOAD CATEGORY BUTTONS
// ======================================


export function loadInventory(){



const categoryButtons =
document.querySelectorAll(
".category-button"
);





categoryButtons.forEach(button=>{


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









// ======================================
// SHOW FEATURES
// ======================================


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
Select design style
</p>

`;









// if feature already selected

if(
selectedDesigns[feature.key]
){


card.classList.add(
"active"
);



}








card.addEventListener(
"click",
()=>{


showStyles(
category,
feature
);



});







container.appendChild(
card
);



});



}









// ======================================
// SHOW STYLES
// ======================================


function showStyles(
category,
feature
){



currentFeature =
feature.key;



const container =
document.getElementById(
"design-options"
);



container.innerHTML = `


<button 
class="back-button"
id="back-feature">

← Back

</button>


<h3>
${feature.name}
</h3>


<p>
Choose your style
</p>


`;









feature.styles.forEach(style=>{



const card =
document.createElement(
"div"
);



card.className =
"design-choice";







// check if selected


const current =
selectedDesigns[
feature.key
];





if(
current &&
current.style === style.id
){


card.classList.add(
"active"
);


}







card.innerHTML = `


<div class="style-icon">

${style.icon}

</div>



<h3>

${style.name}

</h3>



<p>

${style.description}

</p>


`;









card.addEventListener(
"click",
()=>{


applyDesign(
category,
feature,
style
);



});







container.appendChild(
card
);



});








document
.getElementById(
"back-feature"
)
.onclick =
()=>{


showFeatures(
category
);



};




}









// ======================================
// APPLY DESIGN
// ======================================


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








// Replace old style automatically

selectedDesigns[
feature.key
]
=
design;








// Send update to renderer


renderDesign(
design
);







// Refresh menu so active style updates

showStyles(
category,
feature
);



}









// ======================================
// GET SELECTED DESIGNS
// ======================================


export function getSelectedDesigns(){


return selectedDesigns;


}









// ======================================
// RESET DESIGN
// ======================================


export function resetDesigns(){


selectedDesigns = {};


}