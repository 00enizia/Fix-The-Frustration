let usedComponents = [];


export function renderComponent(component, section){


    // prevent duplicate component

    const alreadyAdded =
    document.querySelector(
        `[data-type="${component.type}"]`
    );


    if(alreadyAdded){

        showMessage(
        `${component.name} is already added`
        );

        return;

    }



    const card =
    document.createElement("div");



    card.className =
    "website-widget";


    card.dataset.type =
    component.type;




    card.innerHTML =
    generateComponent(component);




    // delete button

    const remove =
    document.createElement("button");


    remove.className =
    "delete-button";


    remove.innerHTML =
    "×";



    remove.onclick=()=>{

        card.remove();

    };



    card.appendChild(remove);



    section.appendChild(card);


}







function generateComponent(component){


switch(component.type){


case "profile":


return `

<h3>👤 Student Profile</h3>

<div class="profile-box">

<div class="avatar">
👤
</div>


<input value="Student Name">


<input value="BSIT Student">


</div>

`;





case "schedule":


return `

<h3>📅 Class Schedule</h3>

<table>

<tr>
<td>8:00 AM</td>
<td>Programming</td>
</tr>


<tr>
<td>10:00 AM</td>
<td>Database</td>
</tr>


</table>

`;





case "grades":


return `

<h3>📊 Grades</h3>

<p>
Programming - 95%
</p>


<p>
Database - 90%
</p>


`;





case "courses":


return `

<h3>📚 Course List</h3>


<ul>

<li>Programming</li>

<li>Database</li>

<li>Networking</li>


</ul>

`;





case "notification":


return `

<h3>🔔 Notifications</h3>

<p>
No new announcements
</p>

`;





case "search":


return `

<h3>🔍 Search</h3>


<input 
placeholder="Search student portal..."
>


`;





case "announcement":


return `

<h3>📢 Announcement</h3>


<p>
Latest school updates
</p>


`;





case "settings":


return `

<h3>⚙ Settings</h3>


<p>
Account Settings
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








function showMessage(text){


const popup =
document.createElement("div");


popup.className =
"warning-popup";


popup.innerHTML=text;



document.body.appendChild(popup);



setTimeout(()=>{

popup.remove();

},2000);



}