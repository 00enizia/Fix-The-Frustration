let placedComponents = [];

let counter = 0;




export function renderComponent(component, section){



// ==========================
// PREVENT DUPLICATE ITEMS
// ==========================


if(
placedComponents.includes(component.id)
){


alert(
`${component.name} is already added!`
);


return;


}





placedComponents.push(
component.id
);





counter++;





const widget =
document.createElement(
"div"
);



widget.className =
"website-widget";



widget.id =
"component-" + counter;





widget.dataset.type =
component.type;





widget.innerHTML =
createDesign(component);







// DELETE BUTTON


const deleteButton =
document.createElement(
"button"
);



deleteButton.className =
"delete-button";


deleteButton.innerHTML =
"✖";





deleteButton.onclick=()=>{


widget.remove();



placedComponents =
placedComponents.filter(
item=>item !== component.id
);



};





widget.appendChild(
deleteButton
);







section.appendChild(
widget
);






// POSITION


widget.style.left =
"30px";


widget.style.top =
"30px";







enableMove(
widget,
section
);



enableResize(
widget
);



}









// ==================================
// COMPONENT DESIGNS
// ==================================


function createDesign(component){



switch(component.type){



case "profile-card":


return `


<div class="component-header">

👤 Student Profile

</div>



<div class="avatar">

👤

</div>



<input 
class="edit-field"
value="Student Name"
>



<input 
class="edit-field"
value="BSIT Student"
>



`;









case "profile-mini":



return `


<h3>

🧑 Profile

</h3>



<p>
Student Name
</p>


<p>
BSIT - 3A
</p>


`;









case "student-info":



return `


<h3>

📝 Student Information

</h3>



<p>
Name: Student Name
</p>


<p>
Course: BSIT
</p>


<p>
Year Level: 3rd Year
</p>


`;









case "schedule":



return `


<h3>

📅 Class Schedule

</h3>



<table>


<tr>

<td>
Monday
</td>


<td>
Programming
</td>


</tr>




<tr>

<td>
Tuesday
</td>


<td>
Database
</td>


</tr>




<tr>

<td>
Wednesday
</td>


<td>
Networking
</td>


</tr>


</table>


`;









case "calendar":



return `


<h3>
🗓 Calendar
</h3>


<div class="calendar">


1 2 3 4 5

<br>

6 7 8 9 10


<br>

11 12 13 14 15


</div>


`;









case "grades":



return `


<h3>
📊 Grades
</h3>


<p>
Programming - 95
</p>


<p>
Database - 90
</p>


<p>
Networking - 92
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









case "assignment":



return `


<h3>

📒 Assignments

</h3>


<p>

No pending assignments

</p>


`;









case "notification":



return `


<h3>

🔔 Notifications

</h3>


<p>

3 New Notifications

</p>


<p>

Enrollment reminder

</p>


`;









case "announcement":



return `


<h3>

📢 Announcement

</h3>


<p>

School announcement here

</p>


`;









case "message":



return `


<h3>

💬 Messages

</h3>


<p>

No new messages

</p>


`;









case "search":



return `


<h3>

🔍 Search

</h3>



<input

class="search-box"

placeholder="Search student portal..."

>


`;









case "navigation":



return `


<h3>

☰ Navigation

</h3>


<p>

Home

</p>


<p>

Profile

</p>


<p>

Schedule

</p>


`;









case "settings":



return `


<h3>

⚙ Settings

</h3>


<p>

Account

</p>


<p>

Preferences

</p>


`;









case "logout":



return `


<button class="logout-btn">

🚪 Logout

</button>


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









// ==================================
// MOVE COMPONENT
// ==================================


function enableMove(widget, section){



let moving=false;


let startX;


let startY;






widget.addEventListener(
"mousedown",

(e)=>{



if(
e.target.tagName==="INPUT" ||
e.target.tagName==="BUTTON"
){

return;

}




moving=true;




startX =
e.clientX -
widget.offsetLeft;



startY =
e.clientY -
widget.offsetTop;



widget.style.zIndex=999;



}

);







document.addEventListener(
"mousemove",

(e)=>{


if(!moving)
return;





let x =
e.clientX -
section.getBoundingClientRect().left -
startX;




let y =
e.clientY -
section.getBoundingClientRect().top -
startY;





// keep inside section


x=Math.max(
0,
Math.min(
x,
section.clientWidth -
widget.offsetWidth
)
);




y=Math.max(
0,
Math.min(
y,
section.clientHeight -
widget.offsetHeight
)
);





widget.style.left =
x+"px";



widget.style.top =
y+"px";



}

);







document.addEventListener(
"mouseup",

()=>{


moving=false;


}

);



}









// ==================================
// RESIZE COMPONENT
// ==================================


function enableResize(widget){



const resize =
document.createElement(
"div"
);



resize.className =
"resize-handle";



widget.appendChild(
resize
);





let resizing=false;


let startX;


let startY;


let startWidth;


let startHeight;






resize.addEventListener(
"mousedown",

(e)=>{


e.stopPropagation();



resizing=true;



startX=e.clientX;

startY=e.clientY;



startWidth =
widget.offsetWidth;



startHeight =
widget.offsetHeight;



}

);







document.addEventListener(
"mousemove",

(e)=>{



if(!resizing)
return;





widget.style.width =

startWidth +
(
e.clientX-startX
)
+
"px";






widget.style.height =

startHeight +
(
e.clientY-startY
)
+
"px";



}

);







document.addEventListener(
"mouseup",

()=>{


resizing=false;


}

);



}