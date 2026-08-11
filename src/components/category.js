import { components } from "./items.js";
import { createDraggableItem } from "./draggable.js";


export function loadCategory(category){

    const container = document.getElementById("items");

    container.innerHTML="";


    components[category].forEach(item=>{

        const element=document.createElement("div");

        element.className="drag-item";

        element.innerHTML=item;

        element.draggable=true;


        createDraggableItem(element);


        container.appendChild(element);

    });

}