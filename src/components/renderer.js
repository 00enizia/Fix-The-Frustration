let componentCounter = 0;



export function renderComponent(component, section){



const widget = document.createElement("div");



componentCounter++;



widget.className =
"website-widget";



widget.id =
"widget-" + componentCounter;



widget.dataset.type =
component.type;



widget.innerHTML =
createComponentDesign(component);





// position inside section

widget.style.left =
"30px";


widget.style.top =
"30px";





// Add delete button

const deleteButton =
document.createElement("button");



deleteButton.className =
"delete-button";


deleteButton.innerHTML =
"✖";



deleteButton.onclick = ()=>{

widget.remove();

};




widget.appendChild(
deleteButton
);





section.appendChild(
widget
);





makeMovable(widget, section);


makeResizable(widget);



}









function createComponentDesign(component){



switch(component.type){



// PROFILE

case "profile":


return `

<div class="component-header">

${component.icon}

Student Profile

</div>


<div class="profile-content">


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


</div>

`;






// MINI PROFILE

case "profile-mini":


return `

<h3>
🧑 Profile
</h3>


<p>
Student Name
</p>


`;







// STUDENT ID


case "profile-id":


return `


<h3>
🪪 Student ID
</h3>


<p>
Name: __________
</p>


<p>
Course: __________
</p>


`;









// SCHEDULE


case "schedule":


return `


<h3>
📅 Class Schedule
</h3>


<table>

<tr>
<td>Mon</td>
<td>Programming</td>
</tr>


<tr>
<td>Tue</td>
<td>Database</td>
</tr>


<tr>
<td>Wed</td>
<td>Networking</td>
</tr>


</table>


`;







// CALENDAR


case "calendar":


return `


<h3>
🗓 Calendar
</h3>


<div class="calendar-box">


1 2 3 4 5


<br>


6 7 8 9 10


<br>


11 12 13 14 15


</div>


`;








// COURSES


case "courses":


return `


<h3>
📚 Courses
</h3>


<ul>

<li>Programming</li>

<li>Database</li>

<li>Networking</li>


</ul>


`;







// GRADES


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


`;







// NOTIFICATIONS


case "notifications":


return `


<h3>
🔔 Notifications
</h3>


<p>
3 New Announcements
</p>


`;







// ANNOUNCEMENT


case "announcement":


return `


<h3>
📢 Announcement Board
</h3>


<p>
Enrollment starts next week.
</p>


`;








// MESSAGE


case "messages":


return `


<h3>
💬 Messages
</h3>


<p>
No new messages.
</p>


`;







// SEARCH


case "search":


return `


<h3>
🔍 Search
</h3>


<input

class="search-field"

placeholder="Search here..."

>


`;







// SETTINGS


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







// LOGOUT


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









// =============================
// MOVE COMPONENT
// =============================


function makeMovable(widget, section){



let moving=false;


let offsetX=0;


let offsetY=0;






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



offsetX =
e.clientX -
widget.offsetLeft;



offsetY =
e.clientY -
widget.offsetTop;



widget.style.zIndex=100;



});









document.addEventListener(
"mousemove",

(e)=>{



if(!moving)
return;





let x =
e.clientX -
section.getBoundingClientRect().left -
offsetX;




let y =
e.clientY -
section.getBoundingClientRect().top -
offsetY;





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



});








document.addEventListener(
"mouseup",

()=>{


moving=false;


});


}









// =============================
// RESIZE COMPONENT
// =============================


function makeResizable(widget){



const handle =
document.createElement(
"div"
);



handle.className =
"resize-handle";


widget.appendChild(
handle
);





let resizing=false;


let startX;


let startY;


let startWidth;


let startHeight;





handle.addEventListener(
"mousedown",

(e)=>{


e.stopPropagation();



resizing=true;



startX=e.clientX;


startY=e.clientY;


startWidth=
widget.offsetWidth;


startHeight=
widget.offsetHeight;


});







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

+"px";





widget.style.height =

startHeight +

(
e.clientY-startY
)

+"px";



});






document.addEventListener(
"mouseup",

()=>{


resizing=false;


});


}