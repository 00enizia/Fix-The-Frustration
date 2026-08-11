import {
    renderComponent
} from "./renderer.js";



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



                if(!data){
                    return;
                }



                const component =
                JSON.parse(data);





                /*
                GET SECTION NAME
                */

                const sectionType =
                section.getAttribute(
                    "data-section"
                );





                console.log(
                    "Component:",
                    component.name,
                    "Allowed:",
                    component.allowedSection,
                    "Dropped:",
                    sectionType
                );








                /*
                CHECK LOCATION
                */


                if(
                    sectionType !== component.allowedSection
                ){


                    showWarning(
                    `${component.name} can only be placed in ${component.allowedSection}`
                    );


                    return;


                }







                /*
                CHECK SAME CATEGORY ONLY
                */

                const existing =
                section.parentElement
                .querySelector(
                    `[data-type="${component.type}"]`
                );





                if(existing){


                    showWarning(
                    `${capitalize(component.type)} is already added`
                    );


                    return;


                }







                /*
                ADD COMPONENT
                */


                renderComponent(
                    component,
                    section
                );



            }

        );



    });


}








function showWarning(message){



    const old =
    document.querySelector(
        ".warning-popup"
    );


    if(old){
        old.remove();
    }





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




    setTimeout(()=>{


        popup.remove();


    },2000);



}







function capitalize(text){


    return (
        text.charAt(0).toUpperCase()
        +
        text.slice(1)
    );


}