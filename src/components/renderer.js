// src/components/renderer.js


const currentDesigns = {};





export function renderDesign(component){


    currentDesigns[component.type] = component;



    updatePreview();



}








function updatePreview(){



    renderSidebar();

    renderDashboard();

    renderFooter();

    renderNavbar();



}









// ===============================
// NAVBAR
// ===============================


function renderNavbar(){



const navbar =
document.querySelector(
".portal-header"
);



const search =
currentDesigns.search;



if(!search){


navbar.innerHTML =

`

<h1>
Student Portal
</h1>


<p>
Your personalized academic dashboard
</p>


`;

return;


}







if(search.style==="bar"){


navbar.innerHTML =

`

<h1>
Student Portal
</h1>


<div class="search-box">

🔍 Search student portal...

</div>


`;



}







if(search.style==="icon"){


navbar.innerHTML =

`

<h1>
Student Portal
</h1>


<div class="search-icon">

🔎

</div>


`;

}


}









// ===============================
// SIDEBAR
// ===============================


function renderSidebar(){


const sidebar =
document.getElementById(
"sidebar-content"
);



const profile =
currentDesigns.profile;



if(!profile){


sidebar.innerHTML =

`

<p>
Choose profile design
</p>

`;

return;


}







sidebar.innerHTML =
createProfile(profile);




}









function createProfile(profile){



switch(profile.style){



case "classic":


return `

<div class="portal-card profile-classic">


<div class="profile-icon">
👤
</div>



<h3>
Student Profile
</h3>


<p>
Name: Jennylyn Dionecio
</p>


<p>
Course: BSIT
</p>


<p>
Year Level: 3rd Year
</p>


</div>


`;







case "modern":


return `


<div class="portal-card profile-modern">


<div class="profile-icon">

✨

</div>


<h2>
Jennylyn Dionecio
</h2>


<p>
BS Information Technology
</p>


<span>
Student ID: 2026
</span>


</div>


`;







case "avatar":


return `


<div class="portal-card profile-avatar">


<div class="profile-icon">

😊

</div>


<h3>
Jennylyn
</h3>


<p>
BSIT Student
</p>


</div>


`;







case "minimal":


return `


<div class="portal-card">


<h3>
Jennylyn Dionecio
</h3>


<p>
BSIT 3A
</p>


</div>


`;



}



}









// ===============================
// DASHBOARD
// ===============================


function renderDashboard(){



const dashboard =
document.getElementById(
"dashboard-content"
);



dashboard.innerHTML="";





const schedule =
currentDesigns.schedule;



const grades =
currentDesigns.grades;



const courses =
currentDesigns.courses;







if(schedule){


dashboard.innerHTML +=

createSchedule(schedule);


}







if(grades){


dashboard.innerHTML +=

createGrades(grades);


}







if(courses){


dashboard.innerHTML +=

createCourses(courses);


}




if(
dashboard.innerHTML===""

){


dashboard.innerHTML=

`

<p>
Choose academic design
</p>

`;

}



}









function createSchedule(schedule){



if(schedule.style==="calendar"){


return `


<div class="portal-card">


<h3>
📅 Calendar Schedule
</h3>


<div class="calendar-box">


MON
&nbsp;
TUE
&nbsp;
WED


<br><br>


IT301
&nbsp;
DB
&nbsp;
MATH


</div>


</div>


`;

}



if(schedule.style==="card"){



return `


<div class="portal-card">


<h3>
🗓 Class Schedule
</h3>


<div class="schedule-item">

8:00 AM
<br>
💻 Programming

</div>


<div class="schedule-item">

10:00 AM
<br>
🗄 Database

</div>


</div>


`;

}



if(schedule.style==="timeline"){


return `


<div class="portal-card">


<h3>
⏰ Timeline Schedule
</h3>



<p>
08:00 ● Programming
</p>


<p>
10:00 ● Database
</p>


<p>
13:00 ● Networking
</p>


</div>


`;

}


}









function createGrades(grades){



if(grades.style==="progress"){


return `


<div class="portal-card">


<h3>
📊 Grade Progress
</h3>



<p>
Programming
</p>


<div class="grade-bar">

<span style="width:90%">

</span>

</div>





<p>
Database
</p>


<div class="grade-bar">

<span style="width:85%">

</span>

</div>



</div>


`;

}







if(grades.style==="card"){


return `


<div class="portal-card">


<h3>
📈 Grade Cards
</h3>



<div class="grade-card">

Programming

<strong>
95
</strong>


</div>



<div class="grade-card">

Database

<strong>
90
</strong>


</div>



</div>


`;

}



}









function createCourses(){


return `


<div class="portal-card">


<h3>
📚 Course List
</h3>



<p>
💻 Application Development
</p>


<p>
🗄 Database Systems
</p>


<p>
🌐 Networking
</p>


</div>


`;

}









// ===============================
// FOOTER
// ===============================


function renderFooter(){



const footer =
document.getElementById(
"footer-content"
);



footer.innerHTML="";





const notification =
currentDesigns.notification;



const message =
currentDesigns.message;



const announcement =
currentDesigns.announcement;







if(notification){


footer.innerHTML +=

`

<div class="portal-card">


<h3>
🔔 Notifications
</h3>


<p>
New announcement posted
</p>


<p>
Schedule updated
</p>


</div>

`;

}





if(message){


footer.innerHTML +=

`

<div class="portal-card">


<h3>
💬 Messages
</h3>


<p>
Adviser: Good morning!</p>


</div>


`;

}







if(announcement){


footer.innerHTML +=

`

<div class="portal-card">


<h3>
📢 Announcement
</h3>


<p>
Enrollment starts August 15
</p>


</div>


`;

}







if(
footer.innerHTML===""

){


footer.innerHTML=

`

<p>
Choose communication design
</p>

`;

}


}









// ===============================
// FINAL COPY
// ===============================


export function getFinalDesign(){


return document
.getElementById(
"website-preview"
)
.cloneNode(true);


}