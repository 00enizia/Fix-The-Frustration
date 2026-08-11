import {players}
from "../../data/players.js";


export function updateLeaderboard(){


let box=
document.getElementById(
"leaderboard"
);



box.innerHTML="";


players
.sort((a,b)=>b.score-a.score)
.forEach((p,i)=>{


box.innerHTML+=`

<div class="rank">

${i+1}. ${p.team}

<br>

⭐ ${p.score}

</div>

`;

});


}