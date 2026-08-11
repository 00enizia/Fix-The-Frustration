import { startGame } 
from "./src/components/game.js";


import { finishDesign } 
from "./src/components/finish.js";





const startButton =
document.getElementById(
"start-button"
);



const gameScreen =
document.getElementById(
"game-screen"
);



const startScreen =
document.getElementById(
"start-screen"
);







// START GAME

startButton.addEventListener(
"click",

()=>{


startScreen.classList.add(
"hidden"
);



gameScreen.classList.remove(
"hidden"
);



startGame();



}

);









// FINISH DESIGN


const finishButton =
document.getElementById(
"finish-button"
);



finishButton.addEventListener(

"click",

()=>{


finishDesign();


}

);