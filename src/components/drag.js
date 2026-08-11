export function makeDraggable(element,item){


element.draggable=true;


element.addEventListener(
"dragstart",
(e)=>{


e.dataTransfer.setData(
"component",
JSON.stringify(item)
);


});


}