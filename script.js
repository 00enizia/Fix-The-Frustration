import {makeDraggable}
from "./src/components/drag.js";


import {enableDrop}
from "./src/components/drop.js";


import {startGame}
from "./src/components/game.js";


import {components}
from "./data/components.js";


import {testDesign}
from "./src/components/tester.js";


import {updateLeaderboard}
from "./src/components/leaderboard.js";





document.getElementById("join").onclick=()=>{


let team=
document.getElementById("team-name").value;


localStorage.setItem(
"team",
team
);



document.getElementById(
"team-screen"
).style.display="none";


startGame();


updateLeaderboard();


};





document.querySelectorAll(".category button")
.forEach(button=>{


button.onclick=()=>{


let category=
button.dataset.category;



let box=
document.getElementById("items");


box.innerHTML="";



components[category]
.forEach(item=>{


let div=document.createElement("div");


div.className="item";


div.innerHTML=item.name;


makeDraggable(
div,
item
);



box.appendChild(div);



});


};


});



document.getElementById("test")
.onclick=testDesign;



enableDrop();