export function makeDraggable(element){



element.addEventListener(

"dragstart",

(event)=>{





const component = {



id:
element.dataset.id,


name:
element.dataset.name,


icon:
element.dataset.icon,


type:
element.dataset.type,



allowedSections:

JSON.parse(
element.dataset.allowed
)



};






event.dataTransfer.setData(

"component",

JSON.stringify(component)

);



}

);



}