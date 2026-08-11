import {
    loadInventory
}
from "./src/components/inventory.js";


import {
    enableDrop
}
from "./src/components/drop.js";


import {
    finishDesign
}
from "./src/components/finish.js";





let selectedGroup = "";






// ==========================
// GROUP SELECTION
// ==========================


const groupButtons =
document.querySelectorAll(
".group-btn"
);



const groupDisplay =
document.getElementById(
"group-display"
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



groupDisplay.innerHTML =
"Selected: "
+
selectedGroup;



}

);



});











// ==========================
// START GAME
// ==========================


document
.getElementById(
"start-button"
)
.addEventListener(
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
"game-screen"
)
.classList.remove(
"hidden"
);





loadInventory();


enableDrop();



}

);












// ==========================
// FINISH DESIGN
// ==========================



document
.getElementById(
"finish-button"
)
.addEventListener(
"click",
()=>{


finishDesign();


});