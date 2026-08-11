// src/components/renderer.js


const activeDesigns = {};





export function renderDesign(design){



    activeDesigns[design.category + "-" + design.feature] = design;



    updateWebsite();



}









function updateWebsite(){



    renderProfile();


    renderAcademic();


    renderCommunication();


    renderSystem();



}









// ========================================
// PROFILE
// ========================================


function renderProfile(){


const container =
document.getElementById(
"sidebar-content"
);



const profile =
findDesign(
"profile",
"profile"
);



if(!profile){


container.innerHTML = `

<p>
Choose profile design
</p>

`;

return;


}







switch(profile.layout){



case "classic":



container.innerHTML = `

<div class="portal-card classic-profile">


<div class="avatar">

👤

</div>


<h2>
Student Profile
</h2>


<p>
Name:
<span id="student-name">
Jennylyn Dionecio
</span>
</p>


<p>
Course:
BSIT
</p>


<p>
Year Level:
3rd Year
</p>



</div>

`;

break;







case "modern":



container.innerHTML = `

<div class="portal-card modern-profile">


<div class="avatar">

✨

</div>


<h2>
Jennylyn Dionecio
</h2>


<p>
Bachelor of Science in Information Technology
</p>


<div class="profile-tag">

Student

</div>


</div>

`;

break;








case "coquette":



container.innerHTML = `

<div class="portal-card coquette-profile">


<div class="avatar">

🎀

</div>


<h2>
My Profile
</h2>


<p>
♡ Jennylyn Dionecio
</p>


<p>
♡ BSIT Student
</p>


<p>
♡ 3rd Year
</p>



</div>


`;

break;








case "minimal":



container.innerHTML = `

<div class="portal-card minimal-profile">


<h2>
Jennylyn Dionecio
</h2>


<p>
BSIT 3A
</p>


</div>

`;

break;



}





}









// ========================================
// ACADEMIC
// ========================================


function renderAcademic(){



const dashboard =
document.getElementById(
"dashboard-content"
);



dashboard.innerHTML="";





const designs =
Object.values(activeDesigns);






designs.forEach(design=>{



if(
design.category !== "academic"
)
return;






dashboard.innerHTML +=

createAcademicCard(
design
);



});





if(
dashboard.innerHTML === ""
){


dashboard.innerHTML =
`
<p>
Choose academic design
</p>
`;

}


}









function createAcademicCard(
design
){



switch(design.feature){



case "schedule":



return createSchedule(
design
);



case "grades":



return createGrades(
design
);



case "course-list":



return createCourses(
design
);



default:

return "";



}





}









function createSchedule(
design
){



switch(design.layout){



case "classic":



return `

<div class="portal-card">


<h2>
📅 Class Schedule
</h2>


<p>
Monday
</p>


<p>
8:00 AM - Programming
</p>


<p>
10:00 AM - Database
</p>


</div>

`;









case "modern":



return `

<div class="portal-card modern-card">


<h2>
✨ Today's Schedule
</h2>


<div class="schedule-box">

08:00

<br>

Programming

</div>



<div class="schedule-box">

10:00

<br>

Database

</div>



</div>


`;









case "minimal":



return `

<div class="portal-card">


<h2>
Schedule
</h2>


<ul>

<li>
Programming - 8:00
</li>


<li>
Database - 10:00
</li>


</ul>


</div>

`;









case "coquette":



return `

<div class="portal-card coquette-card">


<h2>
🎀 My Classes
</h2>


<p>
♡ Programming
</p>


<p>
♡ Database
</p>


</div>

`;



}



}









function createGrades(
design
){



switch(design.layout){



case "progress":


return `

<div class="portal-card">


<h2>
📊 Grade Progress
</h2>


<p>
Programming
</p>


<div class="progress">

90%

</div>


<p>
Database
</p>


<div class="progress">

85%

</div>


</div>

`;








case "card":



return `

<div class="portal-card">


<h2>
📈 Grade Cards
</h2>


<div class="grade-item">

Programming

<b>
95
</b>

</div>


<div class="grade-item">

Database

<b>
90
</b>

</div>


</div>


`;









case "minimal":


return `

<div class="portal-card">


<h2>
Grades
</h2>


<p>
Programming - 95
</p>


<p>
Database - 90
</p>


</div>


`;




}



}









function createCourses(
design
){



return `

<div class="portal-card">


<h2>
📚 Course List
</h2>


<p>
Application Development
</p>


<p>
Database Systems
</p>


<p>
Networking
</p>


</div>

`;



}









// ========================================
// COMMUNICATION
// ========================================


function renderCommunication(){



const footer =
document.getElementById(
"footer-content"
);



footer.innerHTML="";






Object.values(activeDesigns)
.forEach(design=>{


if(
design.category !==
"communication"
)
return;





footer.innerHTML +=

createCommunication(
design
);



});





}









function createCommunication(
design
){



switch(design.feature){



case "announcement":


return `

<div class="portal-card">

<h2>
📢 Announcement
</h2>


<p>
Enrollment starts August 15
</p>


</div>


`;





case "messages":


return `

<div class="portal-card">

<h2>
💬 Messages
</h2>


<p>
Adviser: Good morning!
</p>


</div>


`;





case "notifications":


return `

<div class="portal-card">


<h2>
🔔 Notifications
</h2>


<p>
New announcement posted
</p>


<p>
Schedule updated
</p>


</div>


`;



}



}









// ========================================
// SYSTEM
// ========================================


function renderSystem(){



const header =
document.getElementById(
"system-content"
);



if(!header)
return;




header.innerHTML="";







Object.values(activeDesigns)
.forEach(design=>{


if(
design.category !==
"system"
)
return;





if(design.feature==="search"){



if(
design.layout==="floating"
){


header.innerHTML += `

<div class="floating-search">


🔍 Search student portal...


</div>

`;

}


else{


header.innerHTML += `

<div class="navbar-search">

🔎 Search...

</div>

`;

}


}



});



}









// ========================================
// FIND DESIGN
// ========================================


function findDesign(
category,
feature
){


return Object.values(activeDesigns)
.find(
item=>

item.category===category
&&
item.feature===feature

);


}








export function getDesigns(){


return activeDesigns;


}