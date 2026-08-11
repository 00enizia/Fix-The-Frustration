export function createDrag(element){


element.addEventListener(
"dragstart",
(e)=>{


e.dataTransfer.setData(
"type",
element.dataset.type
);


});


}