export function makeDraggable(element, component){


    element.draggable = true;



    element.addEventListener(
        "dragstart",
        (event)=>{


            event.dataTransfer.setData(
                "component",
                JSON.stringify(component)
            );


            element.classList.add(
                "dragging"
            );


        }
    );





    element.addEventListener(
        "dragend",
        ()=>{


            element.classList.remove(
                "dragging"
            );


        }
    );



}