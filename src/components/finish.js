export function finishDesign(){



const gameScreen =
document.getElementById(
"game-screen"
);



const finalScreen =
document.getElementById(
"final-screen"
);



const website =
document.getElementById(
"website"
);






// ==========================
// GET GROUP NUMBER
// ==========================


const savedGroup =
localStorage.getItem(
"group"
);





// ==========================
// HIDE DESIGNER
// ==========================


gameScreen.classList.add(
"hidden"
);





// SHOW FINAL PAGE


finalScreen.classList.remove(
"hidden"
);






const output =
document.getElementById(
"final-output"
);





output.innerHTML="";







// COPY WEBSITE


const finalWebsite =
website.cloneNode(
true
);





finalWebsite.id =
"final-website";






// REMOVE EDITING FEATURES


finalWebsite
.querySelectorAll(
".delete-button"
)
.forEach(button=>{


button.remove();


});







finalWebsite
.querySelectorAll(
".resize-handle"
)
.forEach(handle=>{


handle.remove();


});







// Remove dashed borders


finalWebsite
.querySelectorAll(
".website-section"
)
.forEach(section=>{


section.style.border =
"none";


section.style.background =
"white";


});








output.appendChild(
finalWebsite
);








// ADD GROUP LABEL


const groupTitle =
document.createElement(
"div"
);



groupTitle.className =
"final-group";



groupTitle.innerHTML =

`

<h2>

🎓 Student Portal Design

</h2>


<p>

Created by:

<strong>
${savedGroup || "Group"}
</strong>

</p>


`;





output.prepend(
groupTitle
);






addCompleteMessage();



}









function addCompleteMessage(){



const container =
document.getElementById(
"final-screen"
);





const old =
document.querySelector(
".completion-message"
);





if(old){

old.remove();

}





const message =
document.createElement(
"div"
);



message.className =
"completion-message";



message.innerHTML =

`

<h2>

🎉 Congratulations Designers!

</h2>



<p>

Your Student Portal prototype is complete.

</p>


<p>

📸 Take a screenshot of your final website.

</p>


<p>

Submit it to your class GC.

</p>


`;





container.appendChild(
message
);



}