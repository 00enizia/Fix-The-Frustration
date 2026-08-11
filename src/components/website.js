export function addWebsiteItem(item){


let area=document.getElementById("dropped-items");


let element=document.createElement("div");


element.innerHTML=item;


area.appendChild(element);



}



export function changeWebsiteTheme(color){


document.getElementById("website")
.style.background=color;


}