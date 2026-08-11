import {
renderComponent
}
from "./renderer.js";




export function enableDrop(){


const sections =
document.querySelectorAll(
".website-section"
);




sections.forEach(section=>{


section.addEventListener(
"dragover",

(e)=>{


e.preventDefault();


section.classList.add(
"drag-active"
);


}

);





section.addEventListener(
"dragleave",

()=>{


section.classList.remove(
"drag-active"
);


}

);






section.addEventListener(
"drop",

(e)=>{


e.preventDefault();



section.classList.remove(
"drag-active"
);



const data =
e.dataTransfer.getData(
"component"
);





if(!data)return;




const component =
JSON.parse(data);





renderComponent(

component,

section

);



}


);



});



}