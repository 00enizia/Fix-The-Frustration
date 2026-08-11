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



renderComponent(
item,
slot
);



});


});


}