// script.js


import {
    loadInventory
}
from "./src/components/inventory.js";


import {
    finishDesign,
    backToEdit
}
from "./src/components/finish.js";








let selectedGroup = "";








// ==========================
// GROUP SELECTION
// ==========================



const groupButtons =
document.querySelectorAll(
".group-buttons button"
);



const selectedGroupText =
document.getElementById(
"selected-group"
);





groupButtons.forEach(button=>{


button.addEventListener(
"click",
()=>{



groupButtons.forEach(btn=>{


btn.classList.remove(
"selected"
);


});






button.classList.add(
"selected"
);






selectedGroup =
button.dataset.group;






selectedGroupText.innerHTML =
`
Selected: ${selectedGroup}
`;



}


);



});












// ==========================
// START DESIGN
// ==========================



const startButton =
document.getElementById(
"start-button"
);






startButton.addEventListener(
"click",
()=>{



if(selectedGroup===""){



alert(
"Please select your group first!"
);



return;


}







localStorage.setItem(
"group",
selectedGroup
);








document
.getElementById(
"start-screen"
)
.classList.add(
"hidden"
);






document
.getElementById(
"designer-screen"
)
.classList.remove(
"hidden"
);







loadInventory();



}

);











// ==========================
// FINISH BUTTON
// ==========================


document
.getElementById(
"finish-button"
)
.addEventListener(
"click",
()=>{


finishDesign();


}

);









// ==========================
// BACK TO EDIT
// ==========================



document
.getElementById(
"back-button"
)
.addEventListener(
"click",
()=>{


backToEdit();


}

);