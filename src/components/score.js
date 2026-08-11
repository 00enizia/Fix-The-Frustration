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

`🎉 PASS<br>${score}/100`

:

`❌ TRY AGAIN<br>${score}/100`;



document.body.appendChild(box);


}