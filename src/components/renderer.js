export function renderWebsite(type){


let website=document.getElementById("website");


let element=document.createElement("div");


element.className="widget";


if(type==="profile"){


element.innerHTML=`

<div class="profile-card">

<img src="assets/images/profile.png">

<div>

<h3>John Doe</h3>

<p>BS Information Technology</p>

</div>

</div>

`;

}



if(type==="calendar"){


element.innerHTML=`

<h3>📅 Class Schedule</h3>

<p>8:00 AM - Programming</p>

<p>10:00 AM - Database</p>

`;

}




if(type==="notifications"){


element.innerHTML=`

<h3>🔔 Notifications</h3>

<p>Assignment deadline tomorrow</p>

`;

}




if(type==="grades"){


element.innerHTML=`

<h3>📊 Grades</h3>

<p>Programming: 95%</p>

`;

}



if(type==="search"){


element.innerHTML=`

<input placeholder="Search student portal...">

`;

}



website.appendChild(element);


}