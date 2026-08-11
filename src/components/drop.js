import { renderComponent }
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





if(!data){

return;

}





const component =

JSON.parse(data);






const targetSection =

section.dataset.section;







/*
CHECK LOCATION
*/


if(

!component.allowedSections.includes(
targetSection
)

){



showWarning(
component,
targetSection
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



const message = document.createElement(
"div"
);



message.className="warning-popup";



message.innerHTML=

`

⚠️ Wrong Placement!


${component.name}

should be placed in:

${component.allowedSections.join(", ")}


`;



document.body.appendChild(
message
);





setTimeout(()=>{


message.remove();


},3000);



}