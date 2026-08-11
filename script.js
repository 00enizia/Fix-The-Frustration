// script.js


import {
    loadInventory
}
from "./src/components/inventory.js";



import {
    finishDesign,
    backToEdit
}
from "./src/components/finish.js";








// =====================================
// GROUP SELECTION
// =====================================


let selectedGroup = "";





const groupButtons =
document.querySelectorAll(
".group-buttons button"
);





const selectedGroupText =
document.getElementById(
"selected-group"
);







groupButtons.forEach(button=>{


    button.addEventListener(
        "click",
        ()=>{



            // remove previous selection


            groupButtons.forEach(btn=>{


                btn.classList.remove(
                    "selected"
                );


            });








            // select current group


            button.classList.add(
                "selected"
            );






            selectedGroup =
            button.dataset.group;






            selectedGroupText.innerHTML =

            `
            Selected: ${selectedGroup}
            `;





        }
    );


});











// =====================================
// START DESIGN
// =====================================



const startButton =
document.getElementById(
"start-button"
);





startButton.addEventListener(
"click",
()=>{



    if(
        selectedGroup === ""
    ){



        alert(
        "Please choose your group first!"
        );



        return;


    }







    // save group


    localStorage.setItem(
        "group",
        selectedGroup
    );









    // switch screen


    document
    .getElementById(
        "start-screen"
    )
    .classList.add(
        "hidden"
    );








    document
    .getElementById(
        "designer-screen"
    )
    .classList.remove(
        "hidden"
    );








    // load categories


    loadInventory();



});











// =====================================
// FINISH DESIGN
// =====================================



const finishButton =
document.getElementById(
"finish-button"
);





finishButton.addEventListener(
"click",
()=>{


    finishDesign();



});











// =====================================
// BACK TO EDIT
// =====================================



const backButton =
document.getElementById(
"back-button"
);





backButton.addEventListener(
"click",
()=>{


    backToEdit();



});