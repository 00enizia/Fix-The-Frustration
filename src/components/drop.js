import {
    renderComponent
}
from "./renderer.js";





export function enableDrop(){



    const sections =
    document.querySelectorAll(
        ".website-section"
    );






    sections.forEach(section=>{



        section.addEventListener(
            "dragover",
            (event)=>{


                event.preventDefault();


                section.classList.add(
                    "drag-active"
                );


            }
        );






        section.addEventListener(
            "dragleave",
            ()=>{


                section.classList.remove(
                    "drag-active"
                );


            }
        );







        section.addEventListener(
            "drop",
            (event)=>{


                event.preventDefault();



                section.classList.remove(
                    "drag-active"
                );






                const data =
                event.dataTransfer.getData(
                    "component"
                );



                if(!data)
                return;





                const component =
                JSON.parse(data);







                const sectionType =
                section.dataset.section;






                /*
                    CHECK WRONG LOCATION
                */



                if(
                    component.allowedSection
                    !==
                    sectionType
                ){


                    showWarning(
                        `${component.name} belongs to ${component.allowedSection}`
                    );


                    return;


                }








                /*
                    CHECK DUPLICATES
                */



                const existing =
                document.querySelector(
                    `[data-type="${component.type}"]`
                );





                if(existing){


                    showWarning(
                        `${capitalize(component.type)} already added`
                    );


                    return;


                }








                renderComponent(
                    component,
                    section
                );



            }
        );



    });



}









function showWarning(message){



    const popup =
    document.createElement(
        "div"
    );



    popup.className =
    "warning-popup";



    popup.innerHTML =
    `
    ⚠️ ${message}
    `;



    document.body.appendChild(
        popup
    );





    setTimeout(
        ()=>{

            popup.remove();

        },
        2000
    );



}







function capitalize(text){


    return text
    .charAt(0)
    .toUpperCase()
    +
    text.slice(1);



}