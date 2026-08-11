export function addFeature(feature){


let container=document.getElementById("features");


let div=document.createElement("div");


div.className="feature";


div.innerHTML=feature;


container.appendChild(div);



}




export function changeTheme(theme){


let portal=document.getElementById("portal");



if(theme.includes("Purple")){


portal.style.background="#ede9fe";


}


if(theme.includes("Blue")){


portal.style.background="#dbeafe";


}


if(theme.includes("Green")){


portal.style.background="#dcfce7";


}



}