export function renderComponent(component, section){



const widget =
document.createElement("div");



widget.className =
"website-widget";



widget.dataset.type =
component.type;





widget.innerHTML =
createComponentDesign(component);







const deleteButton =
document.createElement("button");



deleteButton.className =
"delete-button";


deleteButton.innerHTML =
"×";




deleteButton.onclick = ()=>{


widget.remove();


};





widget.appendChild(
deleteButton
);





section.appendChild(
widget
);



}









function createComponentDesign(component){



switch(component.type){





// =======================
// PROFILE
// =======================


case "profile":


return createProfile(
component.style
);







// =======================
// SCHEDULE
// =======================


case "schedule":


return createSchedule(
component.style
);







// =======================
// GRADES
// =======================


case "grades":


return createGrades(
component.style
);







// =======================
// COURSES
// =======================


case "courses":


return `


<div class="component-title">

📚 Subjects

</div>



<div class="course-list">

<p>💻 Programming</p>

<p>🗄 Database</p>

<p>🌐 Networking</p>


</div>


`;







// =======================
// NOTIFICATION
// =======================


case "notification":


return `


<div class="component-title">

🔔 Notifications

</div>


<div class="notification-card">

<p>
📢 New announcement posted
</p>


<p>
📅 Schedule updated
</p>


</div>


`;







// =======================
// ANNOUNCEMENT
// =======================


case "announcement":


return `


<div class="component-title">

📢 Announcement Board

</div>



<div class="announcement-card">


<h4>
Enrollment Period
</h4>


<p>
Registration starts August 15.
</p>


</div>


`;







// =======================
// SEARCH
// =======================


case "search":


return `


<div class="search-container">


<input 

class="portal-search"

placeholder="🔍 Search portal..."

>


</div>


`;







// =======================
// SETTINGS
// =======================


case "settings":


return `


<div class="component-title">

⚙ Settings

</div>


<p>
Account Settings
</p>


<p>
Theme Preferences
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









// =================================
// PROFILE DESIGNS
// =================================


function createProfile(style){



if(style==="classic"){



return `


<div class="profile classic">


<h3>
👤 STUDENT PROFILE
</h3>



<div class="profile-icon">

👤

</div>



<p>
Name: Jennylyn Dionecio
</p>


<p>
Student ID: 2026-001
</p>


<p>
Course: BSIT
</p>


<p>
Year: 3rd Year
</p>


</div>


`;

}



if(style==="modern"){



return `


<div class="profile modern">


<div class="profile-icon">

👤

</div>



<h2>

Jennylyn Dionecio

</h2>


<p>

BS Information Technology

</p>



<div class="profile-tag">

Student ID • 2026-001

</div>


</div>


`;

}







if(style==="minimal"){



return `


<div class="profile minimal">


<div class="profile-icon">

👤

</div>



<h2>

Jennylyn

</h2>



<p>

BSIT Student

</p>


</div>


`;

}







if(style==="playful"){



return `


<div class="profile playful">


<h3>

🌸 MY PROFILE

</h3>


<div class="profile-icon">

👩

</div>



<h2>

Jennylyn

</h2>



<p>

⭐ Academic Journey

</p>



</div>


`;

}







if(style==="professional"){



return `


<div class="profile professional">


<h3>

💼 DIGITAL STUDENT ID

</h3>



<p>

👤 Jennylyn Dionecio

</p>



<p>

BS Information Technology

</p>



<p>

Status: Regular

</p>


</div>


`;

}



}









// =================================
// SCHEDULE DESIGNS
// =================================


function createSchedule(style){



if(style==="classic"){



return `


<h3>

📅 Class Schedule

</h3>



<table>


<tr>

<td>
8:00 AM
</td>

<td>
Programming
</td>


</tr>


<tr>

<td>
10:00 AM
</td>

<td>
Database
</td>


</tr>


</table>


`;

}



if(style==="calendar"){



return `


<h3>

🗓 Calendar Schedule

</h3>


<div class="calendar">


MON

<br>

8:00 Programming


<br><br>


TUE

<br>

10:00 Database


</div>


`;

}





if(style==="timeline"){



return `


<h3>

⏱ Timeline Schedule

</h3>



<div class="timeline">


08:00

● Programming


<br>


10:00

● Database


<br>


13:00

● Networking



</div>


`;

}



}









// =================================
// GRADE DESIGNS
// =================================


function createGrades(style){



if(style==="card"){



return `


<h3>

📊 Grade Card

</h3>



<div class="grade-card">


Programming

<strong>

95%

</strong>


</div>



<div class="grade-card">


Database

<strong>

90%

</strong>


</div>


`;

}





if(style==="progress"){



return `


<h3>

📈 Grade Progress

</h3>



<p>

Programming

</p>


<div class="progress">

<span style="width:95%">

</span>

</div>




<p>

Database

</p>


<div class="progress">

<span style="width:90%">

</span>

</div>



`;

}



}