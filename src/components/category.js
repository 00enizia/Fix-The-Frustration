export function showOptions(category){


let options=document.getElementById("options");


options.innerHTML="";



let items=[];



if(category==="components"){


items=[
"🔍 Search Bar",
"📅 Calendar",
"🔔 Notifications",
"📝 Task List",
"👤 Profile"
];


}




if(category==="layout"){


items=[
"Sidebar Layout",
"Dashboard Layout",
"Minimal Layout"
];


}



if(category==="theme"){


items=[
"💙 Blue Theme",
"💜 Purple Theme",
"🌿 Green Theme"
];


}



if(category==="navigation"){


items=[
"Home",
"Dashboard",
"Calendar",
"Settings"
];


}




items.forEach(item=>{


let card=document.createElement("div");


card.className="option-card";


card.innerHTML=item;


card.onclick=function(){


if(item.includes("Blue")){

changeTheme("#dbeafe");

}

else if(item.includes("Purple")){

changeTheme("#ede9fe");

}

else if(item.includes("Green")){

changeTheme("#dcfce7");

}

else{

addItem(item);

}


}



options.appendChild(card);


});



}