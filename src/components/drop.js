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

(event)=>{


event.preventDefault();


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

(event)=>{


event.preventDefault();



section.classList.remove(
"drag-active"
);






const data =

event.dataTransfer.getData(
"component"
);





if(!data){

return;

}






const component =

JSON.parse(data);






const target =

section.dataset.section;






// CHECK IF ALLOWED


if(

!component.allowedSections.includes(
target
)

){



showWarning(
component,
target
);


return;


}







renderComponent(

component,

section

);






}

);



});



}









function showWarning(
component,
section
){



const popup =
document.createElement(
"div"
);



popup.className =
"warning-popup";



popup.innerHTML =

`

⚠️ Wrong Placement!


${component.name}

cannot be placed here.


Try:

${component.allowedSections.join(", ")}

`;




document.body.appendChild(
popup
);






setTimeout(()=>{


popup.remove();


},3000);



}