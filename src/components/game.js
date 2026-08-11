import {problems} from "../../data/problems.js";


export let currentProblem;



export function startGame(){


currentProblem =
problems[
Math.floor(Math.random()*problems.length)
];



document.getElementById("scenario").innerHTML=`

<h3>
${currentProblem.title}
</h3>

<p>
${currentProblem.description}
</p>


`;



startTimer(
currentProblem.time
);


}



function startTimer(time){


let timer=document.getElementById("timer");



let interval=setInterval(()=>{


time--;


timer.innerHTML=
"⏳ Time: "+time;



if(time<=0){

clearInterval(interval);

}


},1000);



}