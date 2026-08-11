import {showOptions} from "./src/components/category.js";

import {addWebsiteItem,changeWebsiteTheme} 
from "./src/components/website.js";


import "./src/components/draggable.js";



window.openCategory=function(category){

    showOptions(category);

}



window.addItem=function(item){

    addWebsiteItem(item);

}



window.changeTheme=function(color){

    changeWebsiteTheme(color);

}



window.testDesign=function(){

document
.querySelector(".game-container")
.classList.add("hidden");


document
.getElementById("testing")
.classList.remove("hidden");


}