let placedComponents = [];



export function renderComponent(component){


const canvas = document.getElementById(
"website-canvas"
);



/*
Prevent duplicate components
Example:
Only one Schedule allowed
Only one Profile allowed
*/

if(
placedComponents.includes(component.id)
){

alert(
`${component.name} is already added!`
);

return;

}



placedComponents.push(component.id);





const card = document.createElement("div");


card.className="website-widget";

card.dataset.type = component.id;



card.style.left = "40px";

card.style.top = 
(placedComponents.length * 30) + "px";





card.innerHTML = createWidgetHTML(component);






// REMOVE BUTTON

const remove = document.createElement("button");


remove.className="remove";

remove.innerHTML="×";



remove.onclick=()=>{


card.remove();


placedComponents =
placedComponents.filter(
item=>item !== component.id
);


};



card.appendChild(remove);





canvas.appendChild(card);





enableMove(card);




}





function createWidgetHTML(component){



switch(component.id){



case "profile":


return `

<h3>👤 Student Profile</h3>

<input 
class="editable"
placeholder="Student Name"
value="Student Name"
>


<input 
class="editable"
placeholder="Course"
value="Course"
>


`;





case "schedule":


return `


<h3>
📅 Class Schedule
</h3>


<p>
8:00 AM - Programming
</p>


<p>
10:00 AM - Database
</p>


`;






case "grades":


return `


<h3>
📊 Grades
</h3>


<p>
Programming : 95%
</p>


<p>
Database : 90%
</p>


`;






case "courses":


return `


<h3>
📚 Course List
</h3>


<ul>

<li>Programming</li>

<li>Database</li>

<li>Networking</li>


</ul>


`;






case "notifications":


return `


<h3>
🔔 Notifications
</h3>


<p>
No new announcements
</p>


`;







case "search":


return `


<h3>
🔍 Search
</h3>


<input 
placeholder="
Search schedules, courses...
">


`;






case "settings":


return `


<h3>
⚙ Settings
</h3>


<p>
Account Settings
</p>


<p>
Privacy
</p>


`;





default:


return `

<h3>
${component.icon}
${component.name}
</h3>

`;



}





}







function enableMove(element){



let offsetX;

let offsetY;

let dragging=false;





element.addEventListener(
"mousedown",
(e)=>{


if(
e.target.classList.contains("remove")
||
e.target.tagName==="INPUT"
){

return;

}



dragging=true;



offsetX =
e.clientX -
element.offsetLeft;


offsetY =
e.clientY -
element.offsetTop;



element.style.zIndex=999;


}
);






document.addEventListener(
"mousemove",
(e)=>{


if(!dragging)
return;



const canvas =
document.getElementById(
"website-canvas"
);



let x =
e.clientX -
canvas.getBoundingClientRect().left -
offsetX;



let y =
e.clientY -
canvas.getBoundingClientRect().top -
offsetY;





// KEEP INSIDE CANVAS


x=Math.max(
0,
Math.min(
x,
canvas.clientWidth-element.offsetWidth
)
);



y=Math.max(
0,
Math.min(
y,
canvas.clientHeight-element.offsetHeight
)
);





element.style.left =
x+"px";


element.style.top =
y+"px";



}
);






document.addEventListener(
"mouseup",
()=>{


dragging=false;


}
);



}






export function clearDesign(){


placedComponents=[];


const canvas =
document.getElementById(
"website-canvas"
);


canvas.innerHTML=
`
<p class="instruction">
Drag components here
</p>
`;



}