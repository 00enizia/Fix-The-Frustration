// src/components/inventory.js


import {
    components
}
from "../../data/components.js";


import {
    renderDesign
}
from "./renderer.js";





let selectedCategory = null;

let selectedFeature = null;







export function loadInventory(){


    const categoryButtons =
    document.querySelectorAll(
        ".category-button"
    );




    categoryButtons.forEach(button=>{


        button.addEventListener(
            "click",
            ()=>{


                const category =
                button.dataset.category;



                showFeatures(category);



            }
        );


    });


}









// =====================================
// SHOW FEATURES
// =====================================


function showFeatures(category){



    selectedCategory = category;



    const container =
    document.getElementById(
        "design-options"
    );



    container.innerHTML = "";





    const data =
    components[category];




    if(!data) return;







    container.innerHTML = `

        <h3>
        ${data.name}
        </h3>

        <p>
        Choose Feature
        </p>

    `;









    data.features.forEach(feature=>{



        const card =
        document.createElement(
            "div"
        );



        card.className =
        "design-choice";



        card.innerHTML = `

            <h2>
            ${feature.name}
            </h2>

            <p>
            Choose a design
            </p>

        `;







        card.addEventListener(
            "click",
            ()=>{


                showStyles(
                    category,
                    feature
                );



            }
        );





        container.appendChild(
            card
        );



    });





}









// =====================================
// SHOW STYLES
// =====================================


function showStyles(
    category,
    feature
){



    selectedFeature = feature;



    const container =
    document.getElementById(
        "design-options"
    );





    container.innerHTML = `

        <button 
        class="back-button"
        id="back-feature">

        ← Back

        </button>


        <h3>
        ${feature.name}
        </h3>


        <p>
        Choose Style
        </p>

    `;








    feature.styles.forEach(style=>{



        const card =
        document.createElement(
            "div"
        );



        card.className =
        "design-choice";





        card.innerHTML = `


            <h2>
            ${style.icon}
            </h2>


            <h3>
            ${style.name}
            </h3>


            <p>
            ${style.description}
            </p>


        `;









        card.addEventListener(
            "click",
            ()=>{


                applyStyle(
                    category,
                    feature,
                    style
                );



            }
        );





        container.appendChild(
            card
        );




    });










    document
    .getElementById(
        "back-feature"
    )
    .addEventListener(
        "click",
        ()=>{


            showFeatures(
                category
            );


        }
    );





}









// =====================================
// APPLY DESIGN
// =====================================



function applyStyle(
    category,
    feature,
    style
){



    const design = {


        category:


        category,



        feature:


        feature.id,



        name:


        feature.name,



        style:


        style.id,



        layout:


        style.data.layout,



        icon:


        style.icon



    };








    renderDesign(
        design
    );







    showAppliedMessage(
        style.name
    );



}









// =====================================
// MESSAGE
// =====================================


function showAppliedMessage(
    name
){



    const old =
    document.querySelector(
        ".design-message"
    );



    if(old)
    old.remove();






    const message =
    document.createElement(
        "div"
    );



    message.className =
    "design-message";



    message.innerHTML =

    `
    ✅ ${name} applied
    `;







    document.body.appendChild(
        message
    );






    setTimeout(
        ()=>{


            message.remove();



        },
        2000
    );



}