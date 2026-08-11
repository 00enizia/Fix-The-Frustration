let usedComponents = [];



export function renderComponent(component, section){


    // CHECK ONLY INSIDE THIS SECTION

    const existing =
    section.querySelector(
        `[data-type="${component.type}"]`
    );



    if(existing){


        showMessage(
            `${component.name} is already added here`
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
    createComponent(component);





    const deleteButton =
    document.createElement("button");



    deleteButton.className =
    "delete-button";


    deleteButton.innerHTML =
    "×";




    deleteButton.onclick = ()=>{


        card.remove();


    };





    card.appendChild(
        deleteButton
    );





    section.appendChild(card);



}









function createComponent(component){


switch(component.type){



case "profile":


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





case "schedule":


return `

<div class="component-header">

📅 Class Schedule

</div>


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







case "grades":


return `


<div class="component-header">

📊 Grades

</div>



<p>

Programming - 95%

</p>


<p>

Database - 90%

</p>


`;







case "courses":


return `


<div class="component-header">

📚 Course List

</div>



<ul>

<li>
Programming
</li>


<li>
Database
</li>


<li>
Networking
</li>


</ul>


`;







case "notification":


return `


<div class="component-header">

🔔 Notifications

</div>



<p>

No new announcements

</p>


`;







case "announcement":


return `


<div class="component-header">

📢 Announcement

</div>



<p>

School Updates

</p>


`;







case "search":


return `


<div class="component-header">

🔍 Search

</div>



<input 

class="search-field"

placeholder="Search..."

>


`;







case "settings":


return `


<div class="component-header">

⚙ Settings

</div>


<p>

Account Settings

</p>


`;







default:


return `


<div class="component-header">

${component.icon}

${component.name}

</div>


`;



}


}








function showMessage(text){


const popup =
document.createElement("div");



popup.className =
"warning-popup";



popup.innerHTML =
text;




document.body.appendChild(
popup
);



setTimeout(()=>{


popup.remove();


},2000);



}