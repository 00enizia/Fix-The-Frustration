export function createDragItem(element){



element.addEventListener(
"dragstart",

(e)=>{


e.dataTransfer.setData(

"component",

element.dataset.name

);



}

);



}



export function enableDragging(){

// reserved for future upgrades

}