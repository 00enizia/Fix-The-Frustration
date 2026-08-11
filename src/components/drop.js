import {
layouts
}
from "../../data/layouts.js";



export function enableDropping(){



const zones =
document.querySelectorAll(
".drop-zone"
);



zones.forEach(zone=>{



zone.addEventListener(

"dragover",

(e)=>{

e.preventDefault();

}

);





zone.addEventListener(

"drop",

(e)=>{


e.preventDefault();



let component =
e.dataTransfer.getData(
"component"
);




let correctArea =
layouts[component];





if(zone.id !== correctArea){



alert(

`❌ ${component} belongs in ${correctArea.toUpperCase()}`

);



return;


}





let existing =
document.querySelector(
`[data-component="${component}"]`
);



if(existing){


alert(

"⚠ This component is already added!"

);


return;


}



createCard(
component,
zone
);



});



});



}






function createCard(name,zone){



let card =
document.createElement(
"div"
);



card.className=
"website-card";



card.dataset.component=
name;



card.innerHTML=
`

<button class="delete-btn">
❌
</button>


<h3>

${getIcon(name)}

${name}

</h3>


${editableContent(name)}


`;





card
.querySelector(
".delete-btn"
)
.onclick=()=>{


card.remove();


};




zone.appendChild(card);



}







function getIcon(name){


const icons={

"Student Profile":"👤",

"Student Information":"📝",

"Class Schedule":"📅",

"Grades":"📊",

"Course List":"📚",

"Notifications":"🔔",

"Announcements":"📢",

"Search Bar":"🔍",

"Settings":"⚙"


};



return icons[name] || "📌";


}







function editableContent(name){


if(name==="Student Profile"){


return `


<input 
class="edit-input"
placeholder="Student Name">


<input 
class="edit-input"
placeholder="Course">


`;


}




if(name==="Search Bar"){


return `


<input

class="search-input"

placeholder="Search courses, schedules...">


`;


}



return "";

}