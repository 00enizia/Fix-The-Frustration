// src/components/finish.js



export function finishDesign(){



const designerScreen =
document.getElementById(
"designer-screen"
);



const finalScreen =
document.getElementById(
"final-screen"
);



const website =
document.getElementById(
"website-preview"
);



const finalPreview =
document.getElementById(
"final-preview"
);






if(
!website ||
!finalPreview
){

console.error(
"Final preview container missing"
);

return;

}







// clear previous output

finalPreview.innerHTML="";








// copy website design

const clone =
website.cloneNode(true);





clone.classList.add(
"final-portal"
);






// remove unnecessary editor texts/buttons if present

const editElements =
clone.querySelectorAll(
".category-list, #design-options, button"
);




editElements.forEach(element=>{

element.remove();

});








finalPreview.appendChild(
clone
);









// show group name


const group =
localStorage.getItem(
"group"
);





const groupDisplay =
document.getElementById(
"final-group-name"
);





if(group){


groupDisplay.innerHTML =
`
🎨 Designed by ${group}
`;



}
else{


groupDisplay.innerHTML =
`
🎨 Student Design Team
`;



}









// change screens


designerScreen.classList.add(
"hidden"
);



finalScreen.classList.remove(
"hidden"
);






}









export function backToEdit(){



const designerScreen =
document.getElementById(
"designer-screen"
);



const finalScreen =
document.getElementById(
"final-screen"
);






finalScreen.classList.add(
"hidden"
);



designerScreen.classList.remove(
"hidden"
);



}