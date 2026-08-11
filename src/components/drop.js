import {renderWebsite} from "./renderer.js";


export function enableDrop(){


let area=document.getElementById("website");


area.addEventListener(
"dragover",
(e)=>{
e.preventDefault();
});


area.addEventListener(
"drop",
(e)=>{


e.preventDefault();


let type=e.dataTransfer.getData("type");


renderWebsite(type);


});


}