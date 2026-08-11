export function createDraggableItem(element){


element.addEventListener("dragstart",(e)=>{


e.dataTransfer.effectAllowed="move";


e.dataTransfer.setData(
"text/plain",
element.innerHTML
);


});


}