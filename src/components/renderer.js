export function renderComponent(item,slot){


let card=document.createElement("div");


card.className="card";


card.dataset.type=item.type;



card.innerHTML=`

<button class="delete">
❌
</button>

`;



if(item.type==="profile"){


card.innerHTML+=`

<img src="${item.image}">

<h3 contenteditable>
Student Name
</h3>

<p contenteditable>
BSIT Student
</p>

`;

}



if(item.type==="calendar"){


card.innerHTML+=`

<h3>
📅 Schedule
</h3>

<p>
8:00 Programming
</p>

<p>
10:00 Database
</p>

`;

}



if(item.type==="grades"){


card.innerHTML+=`

<h3>
📊 Grades
</h3>

<p>
Programming - 95%
</p>

`;

}



if(item.type==="notifications"){


card.innerHTML+=`

<h3>
🔔 Notifications
</h3>

<p>
New announcement posted
</p>

`;

}



if(item.type==="search"){


card.innerHTML+=`

<input placeholder="Search">

`;

}



card.querySelector(".delete")
.onclick=()=>card.remove();



slot.appendChild(card);



}