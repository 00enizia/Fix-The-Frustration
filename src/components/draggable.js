export function createDraggableItem(element){


element.addEventListener(
"dragstart",
(e)=>{


e.dataTransfer.setData(
"text",
element.innerHTML
);


});


}