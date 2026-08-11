import {currentProblem}
from "./game.js";


import {saveScore}
from "./score.js";



export function testDesign(){


let cards=document.querySelectorAll(".card");


let score=0;



currentProblem.required.forEach(req=>{


cards.forEach(card=>{


if(card.dataset.type===req){

score+=30;

}


});


});



saveScore(score);


}