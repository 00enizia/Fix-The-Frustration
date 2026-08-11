import {
startGame
}
from "./src/components/game.js";


import {
finishDesign
}
from "./src/components/finish.js";




window.onload=()=>{


startGame();



document
.getElementById(
"finish-button"
)
.onclick=()=>{


finishDesign();


};



};