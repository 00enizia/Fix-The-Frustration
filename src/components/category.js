import {items} from "./items.js";

import {addFeature,changeTheme} from "./portal.js";



export function showCategory(category){


let choices=document.getElementById("choices");


choices.innerHTML="";



items[category].forEach(item=>{


let button=document.createElement("div");


button.className="choice";


button.innerHTML=item;



button.onclick=function(){


if(item.includes("Theme")){


changeTheme(item);


}

else{


addFeature(item);


}



}



choices.appendChild(button);



});


}