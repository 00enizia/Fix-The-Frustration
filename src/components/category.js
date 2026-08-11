import {components} from "../../data/components.js";
import {createDrag} from "./drag.js";


export function loadCategory(category){


let box=document.getElementById("items");

box.innerHTML="";


components[category].forEach(item=>{


let card=document.createElement("div");

card.className="item";


card.draggable=true;


card.innerHTML=`

<img src="${item.image || ''}">

<p>${item.name}</p>

`;


card.dataset.type=item.type;


createDrag(element,item);


box.appendChild(card);


});


}