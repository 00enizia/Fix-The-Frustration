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



const preview =
document.getElementById(
"website-preview"
);



const finalPreview =
document.getElementById(
"final-preview"
);






// copy final website


finalPreview.innerHTML = "";



const clone =
preview.cloneNode(true);



clone.removeAttribute(
"id"
);



clone.classList.add(
"final-portal"
);




finalPreview.appendChild(
clone
);






// show group


const group =
localStorage.getItem(
"group"
);




const groupText =
document.getElementById(
"final-group-name"
);




if(group){


groupText.innerHTML =
`
🎨 Designed by ${group}
`;



}else{


groupText.innerHTML =
`
🎨 Student Portal Design Team
`;



}








// switch screens


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