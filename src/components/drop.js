import {renderComponent}
from "./renderer.js";



export function enableDrop(){


document.querySelectorAll(".drop-slot")
.forEach(slot=>{


slot.addEventListener(
"dragover",
e=>e.preventDefault()
);



slot.addEventListener(
"drop",
e=>{


e.preventDefault();


let data=
e.dataTransfer.getData(
"component"
);



let item=
JSON.parse(data);



if(
item.slot !== slot.dataset.slot
){


alert(

"⚠️ Wrong Placement!\n\n"+
item.name+
" should be placed in "+
item.slot.toUpperCase()

);


return;


}



renderComponent(
item,
slot
);



});


});


}