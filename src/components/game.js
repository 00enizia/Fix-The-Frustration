import {problems} from "../../data/problems.js";


let currentProblem;



export function loadProblem(){


currentProblem =
problems[
Math.floor(
Math.random()*problems.length
)
];


document
.getElementById("problem-title")
.innerText =
currentProblem.title;



document
.getElementById("problem-description")
.innerText =
currentProblem.description;



window.currentProblem=currentProblem;


}