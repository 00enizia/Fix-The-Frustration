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





// ==============================
// GROUP SELECTION
// ==============================


const groups =
document.querySelectorAll(
".group-btn"
);



const display =
document.getElementById(
"group-display"
);





groups.forEach(button=>{


button.addEventListener(
"click",

()=>{


groups.forEach(btn=>{

btn.classList.remove(
"selected"
);

});



button.classList.add(
"selected"
);



selectedGroup =
button.dataset.group;



display.innerHTML =
"Selected: "
+
selectedGroup;



}

);


});









// ==============================
// START DESIGN
// ==============================


document
.getElementById(
"start-button"
)
.addEventListener(
"click",

()=>{


if(selectedGroup===""){


alert(
"Please choose your group first!"
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









// ==============================
// FINISH
// ==============================


document
.getElementById(
"finish-button"
)
.addEventListener(
"click",

()=>{


finishDesign();



});





document
.getElementById(
"save-button"
)
.addEventListener(
"click",

()=>{


const group =
document.getElementById(
"group-number"
)
.value;



if(group===""){


alert(
"Enter your group number first"
);


return;


}



alert(

`🎉 Group ${group} Design Completed!\n\nTake a screenshot and send it to the GC.`

);



});
