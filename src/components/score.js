import {players}
from "../../data/players.js";


import {updateLeaderboard}
from "./leaderboard.js";



export function saveScore(score){


let team=
localStorage.getItem("team");



let player=
players.find(
p=>p.team===team
);



if(player){

player.score=score;

}



updateLeaderboard();



showResult(score);



}



function showResult(score){


let box=document.createElement("div");


box.className="result";


box.innerHTML=

score>=80

?

`
<h1>🎉 PASS!</h1>

<p>${score}/100</p>

<button onclick="location.reload()">
Play Again
</button>

`

:

`

<button class="close-result">
❌
</button>


<h1>
❌ TRY AGAIN
</h1>


<p>
${score}/100
</p>


<button onclick="location.reload()">
🔄 Try Again
</button>

`;



document.body.appendChild(box);



document.querySelector(".close-result")
?.addEventListener(
"click",
()=>box.remove()
);


}