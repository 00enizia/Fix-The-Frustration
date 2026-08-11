// src/components/renderer.js


let selectedDesigns = {};



let profileData = {

    name:"Juan Dela Cruz",

    course:"Bachelor of Science in Information Technology",

    year:"3rd Year"

};





// ==========================================
// MAIN RENDER
// ==========================================


export function renderDesign(design){


    selectedDesigns[design.feature] = design;


    updateWebsite();


}









function updateWebsite(){


    renderProfile();

    renderAcademic();

    renderCommunication();

    renderSystem();

    renderFooter();


}









// ==========================================
// PROFILE
// ==========================================


function renderProfile(){


const container =
document.getElementById(
"sidebar-content"
);



const design =
selectedDesigns.profile;





if(!design){

container.innerHTML =

`
<p>
Choose profile design
</p>
`;

return;

}








if(design.layout==="classic"){


container.innerHTML = `


<div class="portal-card classic-profile">


<div class="avatar">
👤
</div>


<h2>
${profileData.name}
</h2>


<p>
${profileData.course}
</p>


<p>
${profileData.year}
</p>


</div>


`;

}



if(design.layout==="modern"){


container.innerHTML = `


<div class="portal-card modern-profile">


<div class="avatar">
✨
</div>



<h2>
${profileData.name}
</h2>



<span class="profile-tag">
Student
</span>



<p>
${profileData.course}
</p>


<p>
${profileData.year}
</p>


</div>


`;

}




if(design.layout==="coquette"){


container.innerHTML = `


<div class="portal-card coquette-profile">


<div class="avatar">
🎀
</div>



<h2>
♡ ${profileData.name}
</h2>


<p>
♡ ${profileData.course}
</p>


<p>
♡ ${profileData.year}
</p>



</div>


`;

}





if(design.layout==="minimal"){


container.innerHTML = `


<div class="minimal-profile">


<h2>
${profileData.name}
</h2>


<p>
${profileData.course}
</p>


<p>
${profileData.year}
</p>


</div>


`;

}


}









// ==========================================
// ACADEMIC
// ==========================================


function renderAcademic(){


const container =
document.getElementById(
"dashboard-content"
);



container.innerHTML = "";





Object.values(selectedDesigns)
.forEach(design=>{


if(
design.feature==="schedule" ||
design.feature==="grades" ||
design.feature==="courses"
){


container.innerHTML +=
createAcademic(design);


}



});







if(container.innerHTML===""){


container.innerHTML =
`
<p>
Choose academic design
</p>
`;

}



}









function createAcademic(design){



// --------------------------
// SCHEDULE
// --------------------------


if(design.feature==="schedule"){


if(design.layout==="classic"){


return `


<div class="portal-card">


<h2>
📅 Class Schedule
</h2>


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
Wednesday
</td>

<td>
Database
</td>

</tr>


<tr>
<td>
Friday
</td>

<td>
Networking
</td>

</tr>


</table>


</div>


`;

}




if(design.layout==="modern"){


return `


<div class="portal-card modern-card">


<h2>
✨ Today's Schedule
</h2>



<div class="schedule-box">

08:00 AM

<br>

Programming

</div>



<div class="schedule-box">

10:00 AM

<br>

Database

</div>


</div>


`;

}





if(design.layout==="minimal"){


return `


<div class="portal-card">


<h2>
Schedule
</h2>


<p>
08:00 Programming
</p>


<p>
10:00 Database
</p>


<p>
01:00 Networking
</p>


</div>


`;

}




if(design.layout==="coquette"){


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


<p>
♡ Networking
</p>


</div>


`;

}


}









// --------------------------
// GRADES
// --------------------------


if(design.feature==="grades"){



if(design.layout==="progress"){


return `


<div class="portal-card">


<h2>
📊 Grade Progress
</h2>


<p>
Programming - 90%
</p>


<div class="progress">

</div>


<p>
Database - 85%
</p>


<div class="progress">

</div>



</div>


`;

}



if(design.layout==="card"){


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

}





if(design.layout==="table"){


return `


<div class="portal-card">


<h2>
📋 Grade Table
</h2>


<table>


<tr>

<td>
Programming
</td>

<td>
95
</td>


</tr>



<tr>

<td>
Database
</td>

<td>
90
</td>


</tr>


</table>


</div>


`;

}


}









// --------------------------
// COURSES
// --------------------------


if(design.feature==="courses"){



if(design.layout==="classic"){


return `


<div class="portal-card">


<h2>
📚 Course List
</h2>


<ul>


<li>
Application Development
</li>


<li>
Database Systems
</li>


<li>
Networking
</li>


</ul>


</div>


`;

}




if(design.layout==="card"){


return `


<div class="portal-card">


<h2>
✨ My Courses
</h2>



<div class="course-item">
💻 Application Development
</div>



<div class="course-item">
🗄 Database Systems
</div>



<div class="course-item">
🌐 Networking
</div>



</div>


`;

}




if(design.layout==="coquette"){


return `


<div class="portal-card coquette-card">


<h2>
🎀 My Subjects
</h2>



<p>
♡ Application Development
</p>


<p>
♡ Database Systems
</p>


<p>
♡ Networking
</p>


</div>


`;

}





if(design.layout==="minimal"){


return `


<div class="portal-card">


<h2>
Courses
</h2>


<p>
Application Development</p>


<p>
Database Systems</p>


<p>
Networking</p>



</div>


`;

}



}


}









// ==========================================
// COMMUNICATION
// ==========================================


function renderCommunication(){


const container =
document.getElementById(
"footer-content"
);



container.innerHTML="";





Object.values(selectedDesigns)
.forEach(design=>{


if(
design.feature==="announcement" ||
design.feature==="messages" ||
design.feature==="notifications"
){


container.innerHTML +=
createCommunication(design);


}


});





if(container.innerHTML===""){


container.innerHTML=
`
<p>
Choose communication design
</p>
`;

}



}









function createCommunication(design){



// ANNOUNCEMENT

if(design.feature==="announcement"){



if(design.layout==="classic"){


return `

<div class="portal-card">


<h2>
📢 Announcement Board
</h2>


<p>
Enrollment starts August 15
</p>


<p>
School orientation schedule
</p>


</div>

`;

}




if(design.layout==="card"){


return `


<div class="portal-card">


<h2>
✨ Latest Announcements
</h2>



<div class="announcement-card">

📌 Enrollment Reminder

</div>



<div class="announcement-card">

📌 School Event

</div>



</div>


`;

}





if(design.layout==="timeline"){


return `


<div class="portal-card">


<h2>
🕒 Updates Timeline
</h2>


<p>
Today - Enrollment Update
</p>


<p>
Yesterday - New Schedule
</p>


<p>
Last Week - Reminder
</p>


</div>


`;

}


}









// MESSAGES


if(design.feature==="messages"){



if(design.layout==="bubble"){


return `


<div class="floating-chat">

💬

</div>


`;

}




if(design.layout==="messenger"){


return `


<div class="messenger-window">


<div class="messenger-header">

💬 Messages

</div>



<div class="message">

Teacher:
Good morning!

</div>



<div class="message">

Adviser:
Reminder today.

</div>



</div>


`;

}





if(design.layout==="inbox"){


return `


<div class="portal-card">


<h2>
📥 Inbox
</h2>


<p>
Teacher Message</p>


<p>
Adviser Message</p>


<p>
Registrar Update</p>


</div>


`;

}





if(design.layout==="minimal"){


return `


<div class="portal-card">


<h2>
💬 Chat
</h2>


<p>
No new messages
</p>


</div>


`;

}



}









// NOTIFICATIONS


if(design.feature==="notifications"){


return `


<div class="portal-card">


<h2>
🔔 Notifications
</h2>


<p>
New announcement posted</p>


<p>
Schedule updated</p>


</div>


`;

}


}









// ==========================================
// SEARCH
// ==========================================


function renderSystem(){


const container =
document.getElementById(
"system-content"
);



container.innerHTML="";





const design =
selectedDesigns.search;





if(!design)
return;







if(design.layout==="floating"){


container.innerHTML = `


<div class="floating-search">

🔍 Search student portal...

</div>


`;

}





if(design.layout==="navbar"){


container.innerHTML = `


<div class="navbar-search">

🔎 Search...

</div>


`;

}




if(design.layout==="smart"){


container.innerHTML = `


<div class="smart-search">


🔍 Search anything...



<p>
📅 Schedule
</p>


<p>
📊 Grades
</p>


<p>
📚 Courses
</p>


</div>


`;

}



}









// ==========================================
// FOOTER
// ==========================================


function renderFooter(){


const footer =
document.getElementById(
"footer-content"
);


if(!footer)
return;


}









// ==========================================
// PROFILE UPDATE
// ==========================================


export function updateProfile(
name,
course,
year
){


profileData.name =
name || "Juan Dela Cruz";


profileData.course =
course || "Bachelor of Science in Information Technology";


profileData.year =
year || "3rd Year";



renderProfile();


}








export function getCurrentDesigns(){


return selectedDesigns;


}