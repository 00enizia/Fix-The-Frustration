function startChallenge(){

document.getElementById("home").classList.add("hidden");

document.getElementById("scenario").classList.remove("hidden");

}



function chooseScenario(name){

document.getElementById("scenario").classList.add("hidden");

document.getElementById("design").classList.remove("hidden");


document.getElementById("title").innerHTML=name;

}



function changeTheme(color){

document.getElementById("website").style.background=color;

}



function addFeature(feature){

let box=document.getElementById("features");


let item=document.createElement("p");

item.innerHTML=feature;


box.appendChild(item);

}



function goTest(){

document.getElementById("design").classList.add("hidden");

document.getElementById("test").classList.remove("hidden");

}