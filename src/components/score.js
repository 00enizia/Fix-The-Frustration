let score=0;


let time=60;


export function addScore(points){


score += points;


document
.getElementById("score")
.innerText =
score;



}



export function getScore(){


return score;


}




export function startTimer(){



let timer =
setInterval(()=>{


time--;



document
.getElementById("timer")
.innerText=
time;




if(time<=0){



clearInterval(timer);



alert(
"⏰ Time is up!"
);


}



},1000);



}