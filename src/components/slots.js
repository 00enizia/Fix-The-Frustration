export function enableDrop(){


const area=document.querySelector(
".drop-area"
);



area.addEventListener(
"dragover",
(e)=>{

e.preventDefault();

});




area.addEventListener(
"drop",
(e)=>{


e.preventDefault();



let item=
e.dataTransfer.getData("text");



let widget=document.createElement("div");

widget.className="widget";


widget.innerHTML=item;



area.appendChild(widget);



});


}