// script.js


import {

loadInventory

}

from "./src/components/inventory.js";



import {

finishDesign,

backToEdit

}

from "./src/components/finish.js";



import {

updateProfile

}

from "./src/components/renderer.js";









// =====================================
// GROUP SELECTION
// =====================================


let selectedGroup = "";




const groupButtons =
document.querySelectorAll(
".group-buttons button"
);



const selectedGroupText =
document.getElementById(
"selected-group"
);







groupButtons.forEach(button=>{


button.addEventListener(
"click",
()=>{



groupButtons.forEach(btn=>{


btn.classList.remove(
"selected"
);


});








button.classList.add(
"selected"
);






selectedGroup =
button.dataset.group;






if(selectedGroupText){


selectedGroupText.innerHTML =

`
Selected: ${selectedGroup}
`;

}



}

);



});









// =====================================
// START DESIGN
// =====================================



const startButton =
document.getElementById(
"start-button"
);






if(startButton){



startButton.addEventListener(
"click",
()=>{



if(selectedGroup===""){



alert(
"Please select your group first!"
);



return;


}








localStorage.setItem(
"group",
selectedGroup
);








document
.getElementById(
"start-screen"
)
.classList.add(
"hidden"
);








document
.getElementById(
"designer-screen"
)
.classList.remove(
"hidden"
);








loadInventory();



}

);



}











// =====================================
// PROFILE CUSTOMIZATION
// =====================================



const applyProfileButton =
document.getElementById(
"apply-profile"
);






if(applyProfileButton){



applyProfileButton.addEventListener(
"click",
()=>{



const name =
document.getElementById(
"profile-name"
)
.value;



const course =
document.getElementById(
"profile-course"
)
.value;



const year =
document.getElementById(
"profile-year"
)
.value;








updateProfile(

name,

course,

year

);








showMessage(
"✅ Profile updated!"
);



}

);



}









// =====================================
// FINISH DESIGN
// =====================================



const finishButton =
document.getElementById(
"finish-button"
);







if(finishButton){



finishButton.addEventListener(
"click",
()=>{


finishDesign();



}

);



}









// =====================================
// BACK TO EDIT
// =====================================



const backButton =
document.getElementById(
"back-button"
);







if(backButton){



backButton.addEventListener(
"click",
()=>{


backToEdit();



}

);



}









// =====================================
// SMALL MESSAGE POPUP
// =====================================


function showMessage(text){



const old =
document.querySelector(
".system-message"
);



if(old){

old.remove();

}



const message =
document.createElement(
"div"
);



message.className =
"system-message";



message.innerHTML =
text;





document.body.appendChild(
message
);






setTimeout(()=>{


message.remove();


},2000);



}