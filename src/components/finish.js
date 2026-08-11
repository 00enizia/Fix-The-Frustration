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





// Hide editor

gameScreen.classList.add(
"hidden"
);





// Show final presentation

finalScreen.classList.remove(
"hidden"
);






const output =
document.getElementById(
"final-output"
);





// Clone website design

const clone =
website.cloneNode(true);





// Remove editing effects

clone.id =
"final-website";





// Remove dashed borders

clone
.querySelectorAll(
".website-section"
)
.forEach(section=>{


section.style.border =
"none";


section.style.background =
"white";


});







// Remove unnecessary labels

clone
.querySelectorAll(
".website-section h3"
)
.forEach(title=>{


title.style.display =
"none";


});






output.appendChild(
clone
);






setupScreenshotMode();



}










function setupScreenshotMode(){



const button =
document.getElementById(
"save-button"
);



button.onclick=()=>{



const group =
document.getElementById(
"group-number"
)
.value;



if(group.trim()===""){



alert(
"Please enter your group number first!"
);


return;


}





const message =
document.createElement(
"div"
);



message.className =
"complete-message";



message.innerHTML=

`

<h2>
🎉 Design Completed!
</h2>


<p>

Group ${group}

</p>


<p>

Your Student Portal prototype is ready.

</p>


<p>

📸 Take a screenshot of this page.

</p>


<p>

Send your final design to the class GC.

</p>


`;





document
.getElementById(
"final-screen"
)
.appendChild(message);






button.disabled=true;


button.innerHTML=
"✅ Ready for Submission";



};



}