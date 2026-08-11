export function makeDraggable(element){



element.addEventListener(
"dragstart",

(e)=>{


const component =
{

id:
element.dataset.id,


name:
element.dataset.name,


icon:
element.dataset.icon


};



e.dataTransfer.setData(

"component",

JSON.stringify(component)

);



}

);



}