import { renderComponent } from "./renderer.js";


export function enableDrop(){


const canvas =
document.getElementById(
"website-canvas"
);



canvas.addEventListener(
"dragover",
(e)=>{

e.preventDefault();

canvas.classList.add(
"drag-over"
);

}

);





canvas.addEventListener(
"dragleave",
()=>{


canvas.classList.remove(
"drag-over"
);


}

);






canvas.addEventListener(
"drop",
(e)=>{


e.preventDefault();



canvas.classList.remove(
"drag-over"
);




const data =
e.dataTransfer.getData(
"component"
);




if(!data){

return;

}





const component =
JSON.parse(data);





renderComponent(
component
);



}

);



}