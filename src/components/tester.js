import {problems} from "../../data/problems.js";


export function testDesign(){


let placed=[

...document.querySelectorAll(".widget")

];


let score=0;


problems.required.forEach(req=>{


placed.forEach(item=>{


if(item.innerHTML.includes(req) ||
item.className.includes(req)){


score++;

}


});


});


alert(

"Design Test Complete!\nScore: "+score+"/3"

);


}