import {loadProblem} from "./src/components/game.js";

import {loadCategories} from "./src/components/inventory.js";

import {enableDragging} from "./src/components/drag.js";

import {enableDropping} from "./src/components/drop.js";

import {startTimer} from "./src/components/score.js";

import {testWebsite} from "./src/components/tester.js";





window.onload = ()=>{


loadProblem();


loadCategories();


enableDragging();


enableDropping();


startTimer();



document
.getElementById("test-button")
.addEventListener(
"click",
()=>{

testWebsite();

});



document
.getElementById("retry-button")
.addEventListener(
"click",
()=>{

location.reload();

});



document
.getElementById("close-result")
.addEventListener(
"click",
()=>{

document
.getElementById("result-modal")
.style.display="none";


});


}