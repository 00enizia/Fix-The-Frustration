export function makeDraggable(element){



element.addEventListener(
"dragstart",

(e)=>{


const data = {


id:
element.dataset.id,


name:
element.dataset.name,


type:
element.dataset.type,


icon:
element.dataset.icon


};



e.dataTransfer.setData(

"component",

JSON.stringify(data)

);



}

);



}