import {
getScore,
addScore
}
from "./score.js";




export function testWebsite(){



let required =
window.currentProblem.required;




let placed =
[

...document
.querySelectorAll(
"[data-component]"
)

]
.map(
x=>x.dataset.component
);





let missing =
required.filter(
item=>
!placed.includes(item)
);





let finalScore =
placed.length * 20;




if(missing.length===0){


finalScore=100;


showResult(
true,
finalScore,
"Perfect website! All required features are included."
);



}

else{


showResult(

false,

finalScore,

"Missing: "+missing.join(", ")

);


}





}





function showResult(
success,
score,
message
){



document
.getElementById(
"result-modal"
)
.style.display="flex";





document
.getElementById(
"result-title"
)
.innerHTML =
success ?

"🎉 WEBSITE PASSED"

:

"❌ TRY AGAIN";





document
.getElementById(
"final-score"
)
.innerText=
score;



document
.getElementById(
"feedback"
)
.innerText=
message;



}